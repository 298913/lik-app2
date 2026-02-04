async function criarConta(){

  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const tipoInput  = document.getElementById("tipoConta");
  const msgLabel   = document.getElementById("msg");

  try{
    const cred = await auth.createUserWithEmailAndPassword(
      emailInput.value,
      senhaInput.value
    );

    await db.collection("usuarios")
      .doc(cred.user.uid)
      .set({
        email: emailInput.value,
        role: tipoInput.value,
        criadoEm: new Date()
      });

    msgLabel.innerText = "Conta criada com sucesso!";

  }catch(e){
    msgLabel.innerText = e.message;
  }
}

async function entrar(){

  const emailInput = document.getElementById("email");
  const senhaInput = document.getElementById("senha");
  const msgLabel   = document.getElementById("msg");

  try{
    const cred = await auth.signInWithEmailAndPassword(
      emailInput.value,
      senhaInput.value
    );

    const doc = await db
      .collection("usuarios")
      .doc(cred.user.uid)
      .get();

    if(doc.data().role === "trainer"){
      window.location = "trainer.html";
    }else{
      window.location = "app.html";
    }

  }catch(e){
    msgLabel.innerText = e.message;
  }
}
