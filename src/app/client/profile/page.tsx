"use client"
import { UsuarioService } from "@/services/usuarios.service"
import { useEffect, useState } from "react"
import Button from "@mui/material/Button"

export default function profilePage() {
    const [apiKeyRegenerated, setApiKeyRegenerated] = useState<string>('')
    const [loading, setLoading] = useState(false)

    const regenerateApiKey = () => {
        setLoading(true)
        UsuarioService.regenerateApiKey()
            .then((apiKey) => setApiKeyRegenerated(apiKey))
            .finally(() => setLoading(false))
    }

    return (
        <div>
            <Button variant="contained" onClick={regenerateApiKey}>
                Generar nueva API Key
            </Button>
            
            <p>API Key regenerada: {loading ? <p>Cargando...</p> : apiKeyRegenerated}</p>
        </div>
    )
}
