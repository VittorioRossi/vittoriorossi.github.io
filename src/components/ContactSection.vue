<template>
    <div class="contacts" id="contacts">
        <div class="title">
            <h3>Let's get in touch</h3>
            <h1>Contacts</h1>
        </div>

        <div class="content">

            <form action="https://formsubmit.co/30a790847cce83fe3c32cc5a13467b83" method="POST">

                <div class = "name__form">

                    <div class="flex__col">
                        <input class="input__field" type="text" name="name" id="name" required>
                        <div class="input__label">
                            <label for="name">Name</label>
                        </div>
                    </div>

                    <div class="flex__col">
                        <input class="input__field" type="email" name="email" id="email" required>
                        <div class="input__label">
                            <label for="email">E-mail</label>
                        </div>
                    </div>
                </div>
            
                
                <div class="textarea__from">
                    <textarea class="input__field" name="content" cols="15" rows="5" id="content" required></textarea>
                    <div class="input__label">
                        <label for="content">Your message</label>
                    </div>

                    <button type="submit" class="btn">
                        Send
                    </button>                   
                </div>

            </form>
            
        </div>

        <div class="footer">
                <div class="form__field">
                    <h5>My accounts</h5>
                    <a  href="https://www.linkedin.com/in/vittorio-rossi-645749226/">Linkedin</a>
                    <a  href="https://github.com/VittorioRossi">GitHub</a>
                    <a  href="https://www.kaggle.com/vittoriorossi">Kaggle</a>
                    <a  href="https://www.fiverr.com/vittoriorossi23">Fiverr</a>
                </div>

                <div class="form__field">
                    <h5>Downloads</h5>
                    <a class = "download__btn grid-item" href="./src/assets/file/CV-EN.pdf" download>Download my CV - EN</a>
                    <a class = "download__btn grid-item" href="./src/assets/file/CV-EN.pdf" download>Download my CV - IT</a>
                </div>
            </div>
    </div>
</template>

<script>
export default {
    name:"contacts",
}

</script>


<style scoped>

.contacts {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    overflow: hidden;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

form {
    margin-top: 4vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    gap: 5vh;
}

.input__field {
    box-sizing: border-box;
    width: 100%;
    border: 0;
    outline: 0;
    border-bottom: 2px solid var(--color-text);
    border-radius: 20px;
    padding: 10px 15px;

    background-color: var(--color-secondary);
    resize: none;

    font-size: 20px;
    font-family: Nunito, -apple-system, BlinkMacSystemFont, sans-serif;;
    color: var(--color-text);

    transition: border-color 0.2s;
}

.input__field:focus{
    border-color: var(--color-third);   
}

.input__label {
    position: relative;
    width: 100%;
    height: 100%;
}

.input__label > label {
    width: 100%;
    height: 100%;

    position: absolute;
    top: 0;
    transition: 0.2s;
    font-size: 20px;
    color: var(--color-secondary);
    white-space: nowrap;
}

.flex__col > .input__label > label {
  bottom: -40px;
}

.input__field:focus ~ .input__label > label{
    color: var(--color-third);   
}

.form__field {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    gap: 5px;
}


.name__form {
    display: flex;
    gap: 100px;
}

.name__form > .input__label > input {
    width: 100%;
}
.textarea__from {
    position: relative;
    width: 100%;
    height: 100%;
}
.textarea__from > button {
    position: absolute;
    bottom: 3vh;
    right: 1vw;

    min-width: fit-content;
    width: 6vw;
}

.footer {
    margin-top: 10vh;
    padding: 20px;
    height: 100%;
    background-color: black;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    gap: 50px;
}

.form__field > h3 {
    font-size: 20px;
}
.form__field > a {
    font-size: 15px;
}

h5 {
    color: var(--color-text);
    font-weight: 300;
    letter-spacing: 2px;
}

</style>