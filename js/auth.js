async function criarConta(){

  const email = email.value;
  const senha = senha.value;
  const tipo = tipoConta.value;

  try{
    const cred = await auth.createUserWithEmailAndPassword(email,senha);

    await db.collection("usuarios")
      .doc(cred.user.uid)
      .set({
        email,
        role: tipo,
        criadoEm: new Date()
      });

    msg.innerText="Conta criada!";
  }catch(e){
    msg.innerText=e.message;
  }
}

async function entrar(){

  try{
    const cred = await auth.signInWithEmailAndPassword(
      email.value,
      senha.value
    );

    const doc = await db
      .collection("usuarios")
      .doc(cred.user.uid)
      .get();

    const role = doc.data().role;

    if(role==="trainer"){
      window.location="trainer.html";
    }else{
      window.location="app.html";
    }

  }catch(e){
    msg.innerText=e.message;
  }
}
