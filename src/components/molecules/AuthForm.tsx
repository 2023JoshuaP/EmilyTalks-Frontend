import Button from "@/components/atoms/Button"
import Input from "@/components/atoms/Input"

interface AuthFormProps {
  type: "login" | "register"
  onSubmit: () => void
  onToggle: () => void
}

export default function AuthForm({ type, onSubmit, onToggle }: AuthFormProps) {
  const isLogin = type === "login"

  return (
    <div className="w-full max-w-md space-y-6">
      <h1 className="text-2xl font-bold text-center text-gray-800">{isLogin ? "Iniciar sesión" : "Registrarse"}</h1>

      <div className="space-y-4">
        {!isLogin && <Input label="Nombre completo" type="text" placeholder="Ingresa tu nombre completo" />}
        <Input label="Correo electrónico" type="email" placeholder="Ingresa tu correo electrónico" />
        <Input label="Contraseña" type="password" placeholder="Ingresa tu contraseña" />
      </div>

      <Button onClick={onSubmit} className="w-full">
        {isLogin ? "Ingresar" : "Crear cuenta"}
      </Button>

      <div className="text-center">
        <Button variant="link" onClick={onToggle}>
          {isLogin ? "¿No tienes una cuenta? Regístrate" : "¿Ya tienes una cuenta? Inicia sesión"}
        </Button>
      </div>
    </div>
  )
}