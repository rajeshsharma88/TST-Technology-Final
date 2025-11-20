document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('client-form');
    const pageTitle = document.getElementById('page-title');
    
    const urlParams = new URLSearchParams(window.location.search);
    const clientId = urlParams.get('id') ? parseInt(urlParams.get('id'), 10) : null;
    let editingClient = null;

    if (clientId) {
        pageTitle.textContent = 'Edit Client';
        editingClient = DataManager.getClientById(clientId);

        if (editingClient) {
            form.client_name.value = editingClient.client_name || '';
            form.logo_image.value = editingClient.logo_image || '';
        } else {
            alert('Client not found!');
            window.location.href = 'clients.html';
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const clientData = {
            id: clientId,
            client_name: form.client_name.value,
            logo_image: form.logo_image.value,
        };

        DataManager.saveClient(clientData);

        alert('Client saved successfully!');
        window.location.href = 'clients.html';
    });
});