// obtenemos los elementos del DOM
const textUser = document.getElementById("text-user"),
	btnEncriptar = document.getElementById("btn-encriptar"),
	btnDesencriptar = document.getElementById("btn-desencriptar"),
	resultado = document.getElementById("resultado"),
	form = document.getElementById("form"),
	pasteBtn = document.getElementById("paste-text"),
	deleteBtn = document.getElementById("delete-text")

const encriptarTexto = (text) => {
	// Reemplaza la "e" por "enter"
	text = text.replace(/e/g, "enter")

	// Reemplaza la "i" por "imes"
	text = text.replace(/i/g, "imes")

	// Reemplaza la "a" por "ai"
	text = text.replace(/a/g, "ai")

	// Reemplaza la "o" por "ober"
	text = text.replace(/o/g, "ober")

	// Reemplaza la "u" por "ufat"
	text = text.replace(/u/g, "ufat")

	// Devuelve el texto encriptado
	return text
}

const desencriptarTexto = (text) => {
	// Reemplaza "enter" por "e"
	text = text.replace(/enter/g, "e")

	// Reemplaza "imes" por "i"
	text = text.replace(/imes/g, "i")

	// Reemplaza "ai" por "a"
	text = text.replace(/ai/g, "a")

	// Reemplaza "ober" por "o"
	text = text.replace(/ober/g, "o")

	// Reemplaza "ufat" por "u"
	text = text.replace(/ufat/g, "u")

	// Devuelve el texto desencriptado
	return text
}

// Funcion para copiar texto al portapapeles
async function copyToClipboard(text) {
	try {
		// Copia el texto al portapapeles
		await navigator.clipboard.writeText(text)
	} catch (error) {
		// Muestra un mensaje de error en caso de fallo
		console.error("Error al copiar el texto al portapapeles: ", error)
	}
}

// Funcion para pegar texto del portapapeles
async function pasteFromClipboard() {
	try {
		// Obtiene el texto del portapapeles
		const text = await navigator.clipboard.readText()
		// Devuelve el texto
		return text
	} catch (error) {
		// Muestra un mensaje de error en caso de fallo
		console.error("Error al pegar el texto del portapapeles: ", error)
	}
}

const addButtonCopy = (textToCopy) => {
	// Crear el boton para copiar el texto
	const btn = document.createElement("button")
	btn.innerHTML = "Copiar al portapapeles"

	// Asignarle al evento clic la funcion para copiar el texto
	btn.addEventListener("click", copyToClipboard(textToCopy))

	return btn
}

btnEncriptar.addEventListener("click", () => {
	// Encriptar el texto y almacenarlo en una variable
	const textoEncriptado = encriptarTexto(textUser.value)

	// Si no hay texto salir de la funcion
	if (!textoEncriptado) return

	// Crear elemento p
	const p = document.createElement("p")
	p.classList.add("text-result")

	// Agregar el texto
	p.textContent = textoEncriptado

	// Mostrar el parrafo dentro del div
	resultado.innerHTML = ""
	resultado.appendChild(p)

	// Agregar el boton para copiar
	resultado.appendChild(addButtonCopy(textoEncriptado))
})

btnDesencriptar.addEventListener("click", () => {
	// Desencriptar texto
	const textoDesencriptado = desencriptarTexto(textUser.value)

	// Si no hay texto salir de la funcion
	if (!textoDesencriptado) return

	// Crear elemento p
	const p = document.createElement("p")
	p.classList.add("text-result")

	// Agregar el texto
	p.textContent = textoDesencriptado

	// Mostrar el parrafo dentro del div
	resultado.innerHTML = ""
	resultado.appendChild(p)

	// Agregar el boton para copiar
	resultado.appendChild(addButtonCopy(textoDesencriptado))
})

// Boton pegar
pasteBtn.addEventListener("click", async () => {
	textoCopiado = await pasteFromClipboard()
	if (textoCopiado) textUser.value = textoCopiado
})

// Boton borrar
deleteBtn.addEventListener("click", () => {
	textUser.value = ""
	resultado.innerHTML = `<img src="assets/Muñeco.svg">
	<h3>Ningún mensaje fue encontrado</h3>
	<p>Ingresa el texto que desees encriptar o desencriptar.</p>`
})
