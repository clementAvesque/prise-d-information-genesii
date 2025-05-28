<template>
    <img src="../img/genesii-name.svg" alt="genesii" id="name" />

    <div id="content" >
        <img src="../img/questionnaire.png" alt="" class="in">

        <form class="in">
            <h2>Inscription</h2>
            <div>
                <div id="asking">
                    <div class="info">
                        <label>Prénom:</label>
                        <input type="text" placeholder="Entrez votre prénom" required />
                    </div>
                    <div class="info">
                        <label>nom:</label>
                        <input type="text" placeholder="Entrez votre nom" required />
                    </div>
                    <div class="info">
                        <label>téléphone:</label>
                        <input type="tel" placeholder="Entrez votre téléphone" required />
                    </div>
                    <div class="info">
                        <label>mail:</label>
                        <input type="email" placeholder="Entrez votre email" required />
                        <button type="submit">bonne chance a vous!</button>
                    </div>
                </div>
            </div>
        </form>
    </div>
</template>
<style scoped>
@font-face {
    font-family: "font genesii";
    src: url(../font/bigFont.otf);
}

#content form #asking {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    height: 50vh;
}

label {
    font-family: "font genesii", sans-serif;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 10px;
}

#name {

    width: 100vw;
    height: 10vh;
    margin-top: 5vh;
}

#content img {
    width: 20vw;
    margin-right: 5vw;
}

.info{
    display: flex;
    flex-direction:column;
    width: 20vw;
}

input {
    width: 80%;
    padding: 10px;
    margin: 10px 0;
    border: none;
    border-radius: 5px;
    font-family: "font genesii", sans-serif;
    background-color: transparent;
}

#content h2 {
    font-size: 2.5rem;
    font-weight: 600;
    
}

#content form {
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    font-family: "font genesii", sans-serif;
    align-self: flex-start;
    padding-right: 50px;

}

#content {
    background-color: #13ffdf;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 75vh;
    margin-top: 11.3vh;
}

#content form button {
    width: 80%;
    padding: 10px;
    margin-top: 20px;
    border: none;
    border-radius: 5px;
    font-family: "font genesii", sans-serif;
    background-color: #f83c4f;
    color: black;
    cursor: pointer;
}

.in {
    animation: in 0.8s ease;
}

@keyframes in {
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
}
</style>
<script></script>