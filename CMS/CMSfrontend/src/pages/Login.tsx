import LoginForm from "../components/LoginForm"

function Login() {
    return (
      <>
        <div className="min-h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('loginpagebackground.png')" }}            
        >
            <LoginForm />
        </div>
      </>
    )
  }
  
  export default Login
  