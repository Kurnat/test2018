'use script';
const getSell = selector => document.querySelector(selector);
const getSellAll = selector => document.querySelectorAll(selector);
const getId = id => document.getElementById(id);
const users = [];

//bottons focus event
//----------------------------------------------------------
function bottonStyle(id, shadow) {
    getSell(id).addEventListener('focus', function () {
        this.style.boxShadow = `0px 0px 1px 2px ${shadow}`
    })
    getSell(id).addEventListener('blur', function () {
        this.style.boxShadow = 'none'
    })
}
bottonStyle('#addUser', '#8ed799')
bottonStyle('#editUser', '#8ed799')
//----------------------------------------------------------
//AddUser batton {event.click} (create new element in the table)
getSell('#addUser').onclick = function () {
    //Create tr
    //----------------------------------------------------------
    const newTr = document.createElement('tr');
    getSell('#tbody').appendChild(newTr);
    //Create td = INDEX
    const tdIndex = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tdIndex);
    //Create td = NAME
    const tdName = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tdName);
    //Create td = PASSWOED
    const tdPass = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tdPass);
    //Create td = EMAIL
    const tdEmail = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tdEmail);
    //Create td = EDIT
    const tdEdit = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tdEdit);
    //Create button = EDIT ----------------------------------
    const butEdit = document.createElement('input')
    butEdit.setAttribute('type', 'button');
    butEdit.setAttribute('value', 'Edit');
    butEdit.setAttribute('class', 'editButton');
    getSell('#tbody').lastElementChild.lastElementChild.appendChild(butEdit)
    //Create td = DELETE 
    const tddDel = document.createElement('td');
    getSell('#tbody').lastElementChild.appendChild(tddDel);
    //Create button = DELETE -------------------------------------
    const butDel = document.createElement('input')
    butDel.setAttribute('type', 'button');
    butDel.setAttribute('value', 'Delete');
    butDel.setAttribute('class', 'deliteBatton');
    getSell('#tbody').lastElementChild.lastElementChild.appendChild(butDel)
    //----------------------------------------------------------
    // push value from inputs to table
    //----------------------------------------------------------
    function Person(ind, log, pass, em) {
        this.id = ind
        this.login = log || 'guest';
        this.password = pass || 'password';
        this.email = em || 'email@gmail.com';
    }
    const user = new Person(getSellAll('tr').length - 1, getId('logInp').value, getId('passInp').value, getId('emInp').value);
    users.push(user);
    //----------INDEX 
    tdIndex.innerText = user['id'];
    //----------LOGIN VALUE
    tdName.innerText = user['login'];
    //----------PASWORD VALUE
    tdPass.innerText = user['password'];
    //----------EMAIL VALUE
    tdEmail.innerText = user['email'];
    //----------------------------------------------------------
    let index = tdIndex.innerText;

    //Button edit-------------------------------------------
    for (let i = 0; i < index; i++) {
        getSellAll('.editButton')[i].addEventListener('click', function () {
            getId('logInp').value = users[i]['login'];
            getId('passInp').value = users[i]['password'];
            getId('emInp').value = users[i]['email'];
        })
    }

    //Button delete==================================================================================
    let cheker = false;
    for (let i = 0; i < users.length; i++) {
        getSellAll('.deliteBatton')[i].addEventListener('click', function () {
            const firstTr = this.parentElement.parentElement.firstElementChild.innerText;




            if (users['id'] == users[i]['id']) {
                users.splice(users.indexOf(tdIndex.innerText), 1)
            };
            this.parentElement.parentElement.remove()

            tdIndex.innerText = tdIndex.innerText - 1;

            console.log(users[i]['id']);
            console.log(users.length);


        })
    }
    //clear values
    //---------------------------------------------------------------
    getSell('form').reset()
    //---------------------------------------------------------------

    // Edit bottons event
    //----------------------------------------------------------
    for (let i = 0; i < users.length; i++) {
        getSellAll('.editButton')[i].addEventListener('focus', function () {
            this.style.boxShadow = `0px 0px 1px 2px #edd387`
        })
        getSellAll('.editButton')[i].addEventListener('blur', function () {
            this.style.boxShadow = 'none'
        })
    }
    //----------------------------------------------------------
    console.log(users);


}