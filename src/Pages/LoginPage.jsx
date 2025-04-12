import React from 'react'

function LoginPage() {
  return (
    <div class="flex gap-4 mt-8 mb-8">
    
    <div class="w-[30%] p-4 border">
      <p>Vänster ruta</p>
    </div>
    <div class="flex flex-col gap-4 w-[70%]">
      <h1 class="text-center">Välkommen: Användare</h1>
      <div class="w-full p-4 mx-auto h-40 border">
        <p>Element 1: 70% bredd</p>
      </div>
      <div class="w-full p-4 mx-auto h-40">
        <p>Element 2: 70% bredd</p>
      </div>
      <div class="w-full p-4 mx-auto h-40">
        <p>Element 3: 70% bredd</p>
      </div>
      <div class="w-full p-4 mx-auto h-40">
        <p>Element 4: 70% bredd</p>
      </div>
    </div>
  </div>
  )
}

export default LoginPage
