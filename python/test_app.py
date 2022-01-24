from app import app


def test_should_get_valid_response():
    with app.test_client() as client:
        response = client.get('/')
        assert response.get_data(as_text=True) == '42'
