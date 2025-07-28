

export async function GetUser(username) {
    const response = await fetch(`http://127.0.0.1:8000/api/user/${username}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
};


export async function GetInventories(userId) {
    const response = await fetch(`http://127.0.0.1:8000/api/inventories/user/${userId}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
};

export async function GetItems(inventoryId) {
    const response = await fetch(`http://127.0.0.1:8000/api/items/${inventoryId}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;
}

export async function CreateItems(data) {
    const response = await fetch(`http://127.0.0.1:8000/api/item/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;

};

export async function CreateInventory(data) {
    const response = await fetch(`http://127.0.0.1:8000/api/inventory/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;

};

export async function DeleteItem(itemId) {
    const response = await fetch(`http://127.0.0.1:8000/api/items/${itemId}/delete/`, {
        method: 'DELETE',
    })
        .then(res => {
            if (res.status === 204) {
                console.log("Deleted!");
            } else {
                console.error("Failed to delete");
            }
        });
};

export async function UpdateItem(data, itemId) {
    const response = await fetch(`http://127.0.0.1:8000/api/items/${itemId}/update/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;

};


export async function GetItem(itemId) {
    const response = await fetch(`http://127.0.0.1:8000/api/item/${itemId}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

};

export async function DeleteInventory(inventoryId) {
    const response = await fetch(`http://127.0.0.1:8000/api/inventory/${inventoryId}/delete/`, {
        method: 'DELETE'
    });
};

export async function UpdateInventory(data, inventoryId) {
    const response = await fetch(`http://127.0.0.1:8000/api/inventories/${inventoryId}/update/`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }
    const result = await response.json();
    return result;

};


export async function GetInventory(inventoryId) {
    const response = await fetch(`http://127.0.0.1:8000/api/inventory/${inventoryId}/`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    });

    if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
    }

    const data = await response.json();
    return data;

};

export async function GetUsers() {
    const response = await fetch(`http://127.0.0.1:8000/api/users/`, {
        method: 'GET'
    });

    const data = await response.json();
    return data;

};

