import ContactList from "./component/ContactList";
import "./component/ContactList.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [searchTerm, setSearchTerm] = useState(""); 
  const [students, setStudents] = useState([]);

  const nameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const phoneChangeHandler = (e) => {
    setPhone(e.target.value);
  };

  const emailChangeHandler = (e) => {
    setEmail(e.target.value);
  };

  const searchChangeHandler = (e) => {
    setSearchTerm(e.target.value); 
  };

  // تابع اعتبارسنجی شماره موبایل
  const validatePhone = (phone) => {
    const phoneRegex = /^0\d{10}$/; // شماره موبایل باید 11 رقم عددی باشد
    return phoneRegex.test(phone);
  };

  // تابع اعتبارسنجی ایمیل
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // الگوی رایج برای ایمیل
    return emailRegex.test(email);
  };

  const submitFormHandler = (e) => {
    e.preventDefault();

    // بررسی پر بودن فیلدها
    if (!name.trim() || !phone.trim() || !email.trim()) {
      alert("لطفاً تمامی فیلدها را پر کنید");
      return;
    }

    // بررسی اعتبار شماره موبایل
    if (!validatePhone(phone.trim())) {
      alert(
        "شماره موبایل وارد شده معتبر نیست. لطفاً یک شماره موبایل 11 رقمی وارد کنید."
      );
      return;
    }

    // بررسی اعتبار ایمیل
    if (!validateEmail(email.trim())) {
      alert("ایمیل وارد شده معتبر نیست. لطفاً یک ایمیل صحیح وارد کنید.");
      return;
    }

    setStudents([
      ...students,
      {
        id: students.length + 1,
        name: name.trim(),
        phone: phone.trim(),
        email: email.trim(),
      },
    ]);

    setName("");
    setPhone("");
    setEmail("");
  };

  const filteredStudents = students.filter(
    (student) =>
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.phone.includes(searchTerm) ||
      student.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <ContactList
        submitFormHandler={submitFormHandler}
        nameChangeHandler={nameChangeHandler}
        phoneChangeHandler={phoneChangeHandler}
        emailChangeHandler={emailChangeHandler}
        searchChangeHandler={searchChangeHandler} 
        name={name}
        phone={phone}
        email={email}
        students={filteredStudents} 
      />
    </div>
  );
}

export default App;
