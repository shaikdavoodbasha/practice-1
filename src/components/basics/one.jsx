import { useState } from "react";

function One() {
  // -----------------------------
  // State
  // -----------------------------

  const [count, setCount] = useState(0);

  const [name, setName] = useState("");

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [showDetails, setShowDetails] = useState(false);

  const [items, setItems] = useState([
    "React",
    "JavaScript",
    "HTML",
    "CSS",
  ]);

  const [newItem, setNewItem] = useState("");

  const [number, setNumber] = useState(10);

  // -----------------------------
  // Counter Functions
  // -----------------------------

  const increaseCount = () => {
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  // -----------------------------
  // Form Functions
  // -----------------------------

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    alert(`Hello ${name}! Your form was submitted.`);

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Message:", message);
  };

  // -----------------------------
  // Login
  // -----------------------------

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  // -----------------------------
  // List Functions
  // -----------------------------

  const addItem = () => {
    if (newItem.trim() === "") {
      return;
    }

    setItems([...items, newItem]);

    setNewItem("");
  };

  const removeItem = (indexToRemove) => {
    const updatedItems = items.filter(
      (_, index) => index !== indexToRemove
    );

    setItems(updatedItems);
  };

  // -----------------------------
  // Number Functions
  // -----------------------------

  const increaseNumber = () => {
    setNumber(number + 5);
  };

  const decreaseNumber = () => {
    setNumber(number - 5);
  };

  // -----------------------------
  // Component UI
  // -----------------------------

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "30px",
        fontFamily: "Arial",
      }}
    >
      {/* Header */}

      <header>
        <h1>React Basic Demo</h1>

        <p>
          This component demonstrates basic React concepts.
        </p>
      </header>

      <hr />

      {/* Counter Section */}

      <section>
        <h2>Counter</h2>

        <h3>{count}</h3>

        <button onClick={increaseCount}>
          Increase
        </button>

        <button onClick={decreaseCount}>
          Decrease
        </button>

        <button onClick={resetCount}>
          Reset
        </button>
      </section>

      <hr />

      {/* Login Section */}

      <section>
        <h2>Login Example</h2>

        {isLoggedIn ? (
          <div>
            <p>Welcome back! 👋</p>

            <button onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div>
            <p>You are currently logged out.</p>

            <button onClick={handleLogin}>
              Login
            </button>
          </div>
        )}
      </section>

      <hr />

      {/* Details Section */}

      <section>
        <h2>Conditional Rendering</h2>

        <button
          onClick={() => setShowDetails(!showDetails)}
        >
          {showDetails ? "Hide Details" : "Show Details"}
        </button>

        {showDetails && (
          <div>
            <p>
              React allows us to show or hide UI
              based on state.
            </p>

            <p>
              This is called conditional rendering.
            </p>
          </div>
        )}
      </section>

      <hr />

      {/* Form Section */}

      <section>
        <h2>Simple Form</h2>

        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>

            <br />

            <input
              type="text"
              value={name}
              onChange={handleNameChange}
              placeholder="Enter your name"
            />
          </div>

          <br />

          <div>
            <label>Email</label>

            <br />

            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
            />
          </div>

          <br />

          <div>
            <label>Message</label>

            <br />

            <textarea
              value={message}
              onChange={handleMessageChange}
              placeholder="Enter your message"
            />
          </div>

          <br />

          <button type="submit">
            Submit
          </button>
        </form>

        <div>
          <h3>Preview</h3>

          <p>Name: {name}</p>

          <p>Email: {email}</p>

          <p>Message: {message}</p>
        </div>
      </section>

      <hr />

      {/* Skills List */}

      <section>
        <h2>Skills</h2>

        <ul>
          {items.map((item, index) => (
            <li key={index}>
              {item}

              <button
                onClick={() => removeItem(index)}
                style={{
                  marginLeft: "10px",
                }}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>

        <input
          type="text"
          value={newItem}
          onChange={(event) =>
            setNewItem(event.target.value)
          }
          placeholder="Add a skill"
        />

        <button onClick={addItem}>
          Add Skill
        </button>
      </section>

      <hr />

      {/* Number Section */}

      <section>
        <h2>Number Example</h2>

        <h3>{number}</h3>

        <button onClick={increaseNumber}>
          +5
        </button>

        <button onClick={decreaseNumber}>
          -5
        </button>
      </section>

      <hr />

      {/* Summary */}

      <section>
        <h2>Summary</h2>

        <p>
          Counter: {count}
        </p>

        <p>
          User: {name || "Guest"}
        </p>

        <p>
          Login Status:{" "}
          {isLoggedIn ? "Logged In" : "Logged Out"}
        </p>

        <p>
          Number: {number}
        </p>

        <p>
          Total Skills: {items.length}
        </p>
      </section>

      <hr />

      {/* Footer */}

      <footer>
        <p>
          Built with React ⚛️
        </p>

        <p>
          Keep learning and keep building 🚀
        </p>
      </footer>
    </div>
  );
}

export default One;