
let quickFilterData = [];
let categoryData = [];
let filmData = [];

let pageStatus = {
    insert: 0,
    edit: 1,
    readonly: 2
};

const hdnPageMode = document.getElementById('hdnPageMode');

// quick filter section

const txtModalQuickFilterName = document.getElementById('txtModalQuickFilterName');
const ddlModalQuickFilterStatus = document.getElementById('ddlModalQuickFilterStatus');
const btnSaveModalQuickFilter = document.getElementById('btnSaveModalQuickFilter');
const btnNewQuickFilterRow = document.getElementById('btnNewQuickFilterRow');
const tblQuickFilter = document.getElementById('tblQuickFilter');
const hdnRowId = document.getElementById('hdnRowId');
const btnCloseQuickModal = document.getElementById('btnCloseQuickModal');

const addQuickFilterEventListeners = () => {
    btnSaveModalQuickFilter.addEventListener('click', saveData);
    btnNewQuickFilterRow.addEventListener('click', () => {
        hdnPageMode.value = pageStatus.insert;
        hdnRowId.value = -1;
    });
}

const saveData = () => {

    let row = tryConvertToTableRow();
    let localData = getFromLS('quickData');

    if (parseInt(hdnPageMode.value) === pageStatus.insert) {
        insertQuickData(row, localData);
    }
    else {
        editQuickData(row, localData);
    }

    initQuickSearchTable();
    clearQuickModal();
    btnCloseQuickModal.click();
    showSuccessMessage('Operation completed successfully');

}

const insertQuickData = (row, localData) => {
    localData.push(row);
    saveToLS('quickData', localData);
}

const editQuickData = (row, localData) => {
    for (let item of localData) {
        if (item.id === row.id) {
            item.name = row.name;
            item.status = row.status;
            break;
        }
    }

    saveToLS('quickData', localData);
}


const tryConvertToTableRow = () => {
    let lastId = getMaxIdFromQuickArray();
    let id = parseInt(hdnRowId.value) == -1 ? lastId + 1 : parseInt(hdnRowId.value);
    let name = txtModalQuickFilterName.value;
    let status = parseInt(ddlModalQuickFilterStatus.value);
    let row = {
        id: id,
        name: name,
        status: status,
        deleted:false
    };

    return row;
}

const initQuickSearchTable = () => {
    let tbody = tblQuickFilter.getElementsByTagName('tbody')[0];
    tbody.innerHTML = '';
    let data = getFromLS('quickData');

    if (data === null) {
        return;
    }

    data = data.filter(x=>x.deleted === false);

    data.forEach(item => {
        let tr = createQuickFilterRow(item);
        tbody.appendChild(tr);
    });

}

const createQuickFilterRow = (item) => {
    let tr = document.createElement('tr');
    let tdId = document.createElement('td');
    let tdName = document.createElement('td');
    let tdStatus = document.createElement('td');
    let tdEdit = document.createElement('td');
    let tdRemove = document.createElement('td');

    tdId.textContent = item.id;
    tdName.textContent = item.name;
    tdStatus.textContent = item.status === 1 ? 'Active' : 'Passive';

    let btnEdit = document.createElement('button');
    let btnRemove = document.createElement('button');

    btnEdit.classList.add('btn', 'btn-success');
    btnEdit.textContent = 'edit';
    btnEdit.setAttribute('data-bs-toggle', 'modal');
    btnEdit.setAttribute('data-bs-target', '#mdQuickFilter');
    btnEdit.addEventListener('click', showEditRow);

    btnRemove.classList.add('btn', 'btn-danger');
    btnRemove.textContent = 'remove';
    btnRemove.addEventListener('click', deleteRow);

    tdEdit.appendChild(btnEdit);
    tdRemove.appendChild(btnRemove);


    tr.appendChild(tdId);
    tr.appendChild(tdName);
    tr.appendChild(tdStatus);
    tr.appendChild(tdEdit);
    tr.appendChild(tdRemove);

    return tr;

}

const showEditRow = (e) => {

    hdnPageMode.value = pageStatus.edit;

    let btn = e.target;
    let tr = btn.parentElement.parentElement;
    let name = tr.cells[1].textContent;
    let status = tr.cells[2].textContent;
    hdnRowId.value = tr.cells[0].textContent;

    txtModalQuickFilterName.value = name;
    ddlModalQuickFilterStatus.value = status === 'Active' ? "1" : "0";


}

const deleteRow = (e) => {
    let btn = e.target;
    let row = btn.parentElement.parentElement;
    let id = parseInt(row.cells[0].textContent);
    let localData = getFromLS('quickData');
    
    for(let item of localData){
        if(item.id === id){
            item.deleted = true;
            break;
        }
    }

    saveToLS('quickData', localData);

    initQuickSearchTable();

    showSuccessMessage('Data deleted successfully');
    
}

const clearQuickModal = () => {
    txtModalQuickFilterName.value = '';
    ddlModalQuickFilterStatus.selectedIndex = -1;
}

const getMaxIdFromQuickArray = () => {
    let localData = getFromLS('quickData');
    if (localData.length === 0) {
        return 0;
    }

    let maxCode = 1;

    for (let item of localData) {
        if (item.id > maxCode) {
            maxCode = item.id;
        }
    }

    return maxCode;
}

const initialSaveQuickData = () => {
    let data = getFromLS('quickData');
    if (data !== null && data.length > 0) {
        return;
    }
    saveToLS('quickData', quickFilterData);
}


const loadPage = () => {
    addQuickFilterEventListeners();
    initQuickSearchTable();
    initialSaveQuickData();
    hdnPageMode.value = pageStatus.insert;
}

loadPage();







// end quick filter section


// local storage functions

function saveToLS(key, value) {

    if (localStorage.getItem(key) !== null) {
        localStorage.removeItem(key);
    }
    localStorage.setItem(key, JSON.stringify(value));
}

function getFromLS(key) {

    if (localStorage.getItem(key) === null) {
        return null;
    }
    return JSON.parse(localStorage.getItem(key));
}


const showSuccessMessage = (message) => {
    Swal.fire({
        icon: 'success',
        title: 'Information',
        text: message,
    });
}