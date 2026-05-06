from .models import FeatureFlag


def is_feature_enabled(organization, key):
    if not organization:
        return False

    return FeatureFlag.objects.filter(
        organization=organization,
        key=key,
        is_enabled=True,
    ).exists()


def enable_feature(flag):
    flag.is_enabled = True
    flag.save(update_fields=["is_enabled", "updated_at"])
    return flag


def disable_feature(flag):
    flag.is_enabled = False
    flag.save(update_fields=["is_enabled", "updated_at"])
    return flag