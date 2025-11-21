
document.addEventListener('DOMContentLoaded', () => {
    const tableBody = document.getElementById('inquiries-table-body');
    if (!tableBody) return;

    function renderTable() {
        const inquiries = DataManager.getInquiries();
        tableBody.innerHTML = '';
        if (inquiries.length === 0) {
            tableBody.innerHTML = '<tr><td colspan="5" style="text-align: center;">No inquiries found.</td></tr>';
            return;
        }

        // Sort by date descending
        inquiries.sort((a, b) => new Date(b.date) - new Date(a.date));

        inquiries.forEach(inquiry => {
            const date = new Date(inquiry.date).toLocaleDateString();
            const row = `
                <tr>
                    <td>${date}</td>
                    <td>${inquiry.fullName}</td>
                    <td><a href="mailto:${inquiry.email}">${inquiry.email}</a></td>
                    <td>${inquiry.interest}</td>
                    <td class="actions-cell">
                        <button class="btn btn-primary btn-sm view-btn" data-inquiry='${JSON.stringify(inquiry).replace(/'/g, "&apos;")}'>View</button>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="${inquiry.id}">Delete</button>
                    </td>
                </tr>
            `;
            tableBody.insertAdjacentHTML('beforeend', row);
        });
    }

    renderTable();

    tableBody.addEventListener('click', (e) => {
        if (e.target.classList.contains('delete-btn')) {
            const id = parseInt(e.target.dataset.id, 10);
            if (confirm('Are you sure you want to delete this inquiry?')) {
                DataManager.deleteInquiry(id);
                renderTable();
            }
        } else if (e.target.classList.contains('view-btn')) {
            const inquiry = JSON.parse(e.target.dataset.inquiry);
            const message = `
                From: ${inquiry.fullName}
                Email: ${inquiry.email}
                Phone: ${inquiry.phone}
                Company: ${inquiry.companyName}
                Interest: ${inquiry.interest}
                
                Message:
                ${inquiry.message}
            `;
            alert(message);
        }
    });
});
