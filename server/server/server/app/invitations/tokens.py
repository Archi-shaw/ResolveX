import secrets

def generate_tokens():
    return secrets.token_urlsafe(48)