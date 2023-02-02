<template>
    <div class="contacts" id="contacts">
        <div class="title">
            <h3>Let's get in touch</h3>
            <h1>Contacts</h1>
        </div>

        <div class="content">

            <form action="https://formsubmit.co/30a790847cce83fe3c32cc5a13467b83" method="POST">
                <input class="input-field" type="text" name="name" id="name" required>
                <div class="label-div">
                    <label for="name">Name</label>
                </div>
                <input class="input-field" type="email" name="email" id="email" required>
                <div class="label-div">
                    <label for="email">E-mail</label>
                </div>
                <textarea class="input-field" name="content" cols="20" rows="10" id="content" required></textarea>
                <div class="label-div">
                    <label for="content">Your message</label>
                </div>
                

                <div class="send-btn">
                    <button type="submit" class="btn">Send</button>

                    <lord-icon
                        src="https://cdn.lordicon.com/rhvddzym.json"
                        trigger="loop"
                        delay="2000"
                        colors="primary:#00EE01,secondary:#00EE01"
                        style="width:100px;height:100px;">
                    </lord-icon>
                </div>
            </form>
            

            <div class="accounts">
                <h3>My accounts</h3>
                <a class = "btn" href="https://www.linkedin.com/in/vittorio-rossi-645749226/">Linkedin</a>
                <a class = "btn" href="https://github.com/VittorioRossi">GitHub</a>
                <a class = "btn" href="https://www.kaggle.com/vittoriorossi">Kaggle</a>
                <a class = "btn" href="https://www.fiverr.com/vittoriorossi23">Fiverr</a>
            </div>
            
            <!--
            <h3>Download</h3>
            <a class = "download__btn" href="./src/assets/file/CV-EN.pdf" download>
                <div class="btn">
                Download my CV - EN
                </div>
            </a>
            <a class = "download__btn" href="./src/assets/file/CV-EN.pdf" download>
                <div class="btn">
                Download my CV - IT
                </div>
            </a>
            -->
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
    overflow-x: none;
}

.content {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center ;
}

form {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.input-field {
    font-family: Nunito, -apple-system, BlinkMacSystemFont, sans-serif;;

    border: 0;
    outline: 0;
    border-bottom: 2px solid var(--color-text);
    color: var(--color-text);
    background-color: transparent;

    transition: border-color 0.2s;
}

.input-field:focus{
    border-color: var(--color-third);
}
.input-field:placeholder-shown ~ label{
    cursor: text;
    top: 20px;
}

.label-div {
    position: relative;
}

label {
  position: absolute;
  top: -55px;
  transition: 0.2s;
  font-size: 20px;
  color: var(--color-secondary);
}

.download__btn {
    text-align: center;
    justify-content: center;
    margin: 10px 0px  0px !important;
    padding: 15px;
    width: 200px;
    height: 15px;
    font-size: 15px;

}

.send-btn {
    display: flex;
    flex-direction: row;
    width: 50%;
    height: fit-content;
}

.accounts {
    display: flex;
    flex-direction: column;
    gap: 40px;
}
</style>