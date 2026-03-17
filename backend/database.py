import psycopg2
import os

def get_connection():
    return psycopg2.connect(
        host="db",
        database="appdb",
        user="user",
        password="password"
    )