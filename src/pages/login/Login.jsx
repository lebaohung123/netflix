import "./Login.scss";

export default function Login() {
  return (
    <div className="login">
      <div className="top">
        <div className="wrapper">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
            alt=""
          />
        </div>
        <div className="container">
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder="Email or Phone number" />
            <input type="password" placeholder="PassWord" />
            <button>Sign In</button>
            <span>
              New to NetFlix? <b>Sign up now.</b>
            </span>
            <small>
              this page is protected by Google reCAPCHA to ensure you are not a
              bot. <b>Learn more</b>
            </small>
          </form>
        </div>
      </div>
    </div>
  );
}
