import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getDatabase, ref, onValue } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyB6x0Si8OoiD3UDDMjXgZTMOdfv8neMtik",
    authDomain: "gym-database-f4b61.firebaseapp.com",
    databaseURL: "https://gym-database-f4b61-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "gym-database-f4b61",
    storageBucket: "gym-database-f4b61.firebasestorage.app",
    messagingSenderId: "79575587778",
    appId: "1:79575587778:web:55b218534fde16847ad45b",
    measurementId: "G-BGPJNP62J5"
};


const app = initializeApp(firebaseConfig);
const db = getDatabase(app);


const customersRef = ref(db, "Customers");

const tableBody = document.getElementById("memberTableBody");

// Realtime listener
onValue(customersRef, (snapshot) => {
  tableBody.innerHTML = "";

  snapshot.forEach(child => {
    const data = child.val();

    const fullname = `${data.nameofcustomer.firstname} ${data.nameofcustomer.lastname}`;
    const phone = data.mobile || "";
    const uid = data.uid || "";

    // Generate QR dynamically
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${uid}`;

    const row = `
      <tr>
        <td>${uid}</td>
        <td>${fullname}</td>
        <td>${phone}</td>
        <td>-</td>
        <td><img src="${qrUrl}" width="100"></td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
});
