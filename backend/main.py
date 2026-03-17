from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import get_connection

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend funcionando 🚀"}

@app.post("/crear")
def crear_item(nombre: str):
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("""
        CREATE TABLE IF NOT EXISTS items (
            id SERIAL PRIMARY KEY,
            nombre TEXT
        )
    """)

    cur.execute("INSERT INTO items (nombre) VALUES (%s)", (nombre,))
    conn.commit()

    cur.close()
    conn.close()

    return {"mensaje": "Item creado"}

@app.get("/items")
def obtener_items():
    conn = get_connection()
    cur = conn.cursor()

    cur.execute("SELECT * FROM items")
    rows = cur.fetchall()

    cur.close()
    conn.close()

    return rows