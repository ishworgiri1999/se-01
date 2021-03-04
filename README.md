## se-01-team-34
SE Sprint 01, Team 34

Ishwor Giri & Muhammad Shahzaib Tahir Awan


## Installation


```bash
#Install Virtual Environment first 
python3 -m pip install --user virtualenv

# Creating a virtual environment
python3 -m venv env
#Activating Virtual Environment
source env/bin/activate
```
Leaving VENV
```
deactivate
```


Use the package manager [pip](https://pip.pypa.io/en/stable/) to install django.

```bash
python -m pip install Django
```

or 
```
python -m pip install -r requirements.txt
```


Change Directory to the project 
```
cd beergame
```

Database Migration

```bash
#make Migration

python manage.py makemigrations
#Apply Migration

python manage.py migrate
```

Start Server
```
./manage.py runserver 
```