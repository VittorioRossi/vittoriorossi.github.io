<template>
    <div class="contacts" id="contacts">
        <div class="title">
            <h3>Let's get in touch</h3>
            <h1>Contacts</h1>
        </div>

        <div class="content">
            
            <lord-icon
                src="https://cdn.lordicon.com/rhvddzym.json"
                trigger="loop"
                delay="2000"
                colors="primary:#00EE01,secondary:#00EE01"
                style="width:250px;height:250px;">
            </lord-icon>

            <div class="col-1">
                <h4>
                    Contacts
                </h4>
                <a class = "link" href="mailto:rossi.vittori@gmail.com">rossi.vittori@gmail.com</a>    
                

            </div>
            <div class="col-2">
                <h4>
                    My profiles
                </h4>
                <a class = "link" href="https://www.linkedin.com/in/vittorio-rossi-645749226/">Linkedin</a>
                <a class = "link" href="https://github.com/VittorioRossi">GitHub</a>
                <a class = "link" href="https://www.kaggle.com/vittoriorossi">Kaggle</a>
                <a class = "link" href="https://www.fiverr.com/vittoriorossi23">Fiverr</a>

            </div>

            <div class="col-3">
                <h4>
                    Downloads
                </h4>
                <a class = "link-btn" href="./src/assets/file/CV-EN.pdf" download>
                    <div class="btn">
                    Download my CV - EN
                    </div>
                </a>
                <a class = "link-btn" href="./src/assets/file/CV-EN.pdf" download>
                    <div class="btn">
                    Download my CV - IT
                    </div>
                </a>
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

    height: 100vh;
    overflow-x: none;
}

.content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);

}
.content div {
    height: 80%;
    display: flex;
    flex-direction: column;

    margin: 20px;
}
.content a.link{
    font-size: 18px;
    font-weight: 200;
    color: var(--color-text);
    text-decoration: none;
    transition: all 0.5;

    margin: 10px 0px;
}

.content a.link:hover{
    color: var(--color-third);
    cursor: pointer;

}
.content a {
    text-decoration: none;
    color: var(--color-text);
    margin: 0;
    padding: 0;
}

.col-1,.col-2 {
    border-right: 1px solid var(--color-third);
}


.btn {
    text-align: center;
    justify-content: center;
    margin: 10px 0px  0px !important;
    padding: 15px;
    width: 200px;
    height: 15px;
    font-size: 15px;

}

</style>