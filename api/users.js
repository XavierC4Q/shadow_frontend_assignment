import fetch from "../util/fetch-fill";

// users endpoint
window.path = "http://localhost:3000/users";

// getUsers function plus any additional functions go here ...
const getUsers = options => {
  let url = new URL(window.path);
  if (options) {
    url.search = new URLSearchParams(options)
  }
  return Promise.resolve(fetch(url))
}

const countIdsandSMS = list => {
  let ids = [];
  let smsUsers = 0;

  list.forEach(item => {
    ids.push(item.id);
    if (item.smsUser) {
      smsUsers++
    }
  })

  return {ids, smsUsers}
}

document.addEventListener('DOMContentLoaded', () => {
  let smsCount = document.querySelector('.sms-count');
  let idContainer = document.querySelector('.ids');
  let adminContainer = document.querySelector('.admins');

  getUsers({page: 2, role: 'admin'}).then(res => {
    return res.json();
  }).then(data => {
    let finalResult = countIdsandSMS(data)

    smsCount.textContent = `SMS Count: ${finalResult.smsUsers}`

    listAdminIds(finalResult.ids);

    for (let index in data) {
      createAdminCard(data[index]);
    }

    return finalResult;
  }).catch(err => {
    console.log('Error fetching from /users', err);

    clearBody();
    appendErrorMessage();

    return null
  })

  const listAdminIds = list => {
    list.forEach(item => {
      let newDiv = document.createElement('div');
      newDiv.className = 'id-div';
      newDiv.innerText = item.toString();

      idContainer.appendChild(newDiv);
    })
  }

  const createAdminCard = admin => {
    let adminDiv = document.createElement('div');
    adminDiv.className = 'admin-div';

    appendAdminName(admin, adminDiv);
    adminCardBar(adminDiv);
    appendAdminEmail(admin, adminDiv);

    adminContainer.appendChild(adminDiv);
  }

  const appendAdminName = (admin, adminDiv) => {
    let nameContainer = document.createElement('div');
    nameContainer.className = 'name-container';

    let name = document.createElement('h4');
    name.className = 'name';
    name.textContent = `${admin.givenName} ${admin.familyName}`;

    nameContainer.appendChild(name);
    adminDiv.appendChild(nameContainer);
  }

  const adminCardBar = adminDiv => {
    let borderContainer = document.createElement('span');
    borderContainer.className = 'border-container';

    let border = document.createElement('p');
    border.className = 'border';

    borderContainer.appendChild(border);
    adminDiv.appendChild(borderContainer);
  }

  const appendAdminEmail = (admin, adminDiv) => {
    let emailContainer = document.createElement('div');
    emailContainer.className = 'email-container';

    let email = document.createElement('p');
    email.className = 'email';
    email.textContent = `Email: ${admin.email}`;

    emailContainer.appendChild(email);
    adminDiv.appendChild(emailContainer);
  }

  const clearBody = () => {
    let contentNode = document.querySelector('.content');
    let footerNode = document.querySelector('.footer');
    while (contentNode.firstChild) {
      contentNode.removeChild(contentNode.firstChild);
    }
    while (footerNode.firstChild) {
      footerNode.removeChild(footerNode.firstChild);
    }
  }

  const appendErrorMessage = () => {
    let contentNode = document.querySelector('.content');
    let errorDiv = document.createElement('div');
    errorDiv.className = 'error';
    errorDiv.textContent = 'Failed to fetch users. Is the server running? Did you rebuild your bundle?';
    contentNode.appendChild(errorDiv);
  }
})

export default getUsers;
