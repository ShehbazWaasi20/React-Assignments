import React from 'react'



export default function Content() {
  let employee = {
    Name:"Alan Ford",
    employeeid:"00005152",
    Appointment: "9:00AM (06-04-2022)",
    Email:"alan.ford@email.nI",
    phone:"+31123456789",
    status:"InProgress",
    Door:"Mark",
    Time:"10:30AM (07-04-2022)",
    image:'https://www.w3schools.com/howto/img_avatar.png',
    Role : "Blotaarat Bosbessen",
    summary:"Some relevent summary description provided",
    arrow :"<",
  }
  return (
    <div className='container'>
    <div className='header'>
      <span className='arrow'>{employee.arrow}</span>
      <strong className='id'>{employee.Name}</strong>
      <span className='id'>{employee.employeeid}</span>
      <button>Print</button>
    </div>
    <div className='info'>
      <p><strong>{"Appoinment:"}</strong> {employee.Appointment}</p>
      <p><strong>Email: </strong>  {employee.Email}</p>
      <p><strong>{"phone:"}</strong>{employee.phone}</p>
    </div>
    <div className='order-info'>
      <section>
        <strong> {"Status"}</strong>
        <p><strong>{"."}</strong>{"In Progress"}</p>
      </section>
      <section>
        <strong> {"Door"}</strong>
        <p>{employee.Door}</p>
      </section>
      <section>
        <strong> {"Time"}</strong>
        <p>{employee.Time}</p>
      </section>
    </div>
    <article className='role'>
      <p className='arrow'>{employee.arrow}</p>
      <p className='box'></p>
      <img className='image' src={employee.image} alt="img not found" />
      <figcaption><strong>{employee.Role}</strong></figcaption>
      <figcaption>{employee.summary}</figcaption>
    </article>
    </div>
  )
}
