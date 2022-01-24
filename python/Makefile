.PHONY: setup test
setup:
	rm -rf env
	python3 -m venv env
	source ./env/bin/activate && python3 -m pip install -r requirements.txt
test:
	source ./env/bin/activate && python3 -m unittest test_app
