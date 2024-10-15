import React,{useState} from 'react'

const Registration = () => {
    const [empData, setEmpData] = useState({
        name: 'Full name',
        mobile: '999999999',
        email: 'xyz@gmail.com',
        password: 'Secret....'
      });
    
      // Handle input change
      const handleChange = (e) => {
        //e.target to capture the name and value of the form 
        const { name, value } = e.target;
        setEmpData({
            //we use .. to get the previous values
          ...empData,

          [name]: value
        });
      };
    
      // Handle form submission
      const handleSubmit = (e) => {
        e.preventDefault(); // Prevent page refresh
        console.log('Form submitted:', empData);
        //here we will be storing it 
      };
    
      return (
        <div className="container">
          <h1>Simple Form</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                Name:
                <input
                  type="text"
                  name="name"
                  value={empData.name}
                  //we are using handle change method instead of inline arrow function because it will replace the complete use state
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Mobile Number:
                <input
                  type="tel"
                  name="mobile"
                  value={empData.mobile}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Email ID:
                <input
                  type="email"
                  name="email"
                  value={empData.email}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <div>
              <label>
                Password:
                <input
                  type="password"
                  name="password"
                  value={empData.password}
                  onChange={handleChange}
                  required
                />
              </label>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      );
}

export default Registration