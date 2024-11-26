import React from "react";
function Input() {

  return (
    <div className="input">
      <div className="inner">
      <form action="http://localhost:8000/registation" method="POST">
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname" name="fullname" required />

        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <label for="confirm-password">Confirm Password:</label>
        <input
          type="password"
          id="confirm-password"
          name="confirm-password"
          required
        />

        <label for="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" />

        <label for="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>

       <div className="check">
       <input type="checkbox" id="terms" name="terms" required />
       <label for="terms">I agree to the Terms and Conditions</label>
       </div>

        <button type="submit">Register</button>
      </form>
      </div>
    </div>
  );
}

export default Input;
