<template>
  <div class="brainstorm">
    <main>
      <h1 id="theme">Informatique</h1>
      <div class="card">
        <article>
          <h1>BrainStorming</h1>
          <h2>Bienvenue dans cette session plus fun de brainstorming des languages informatiques !</h2>
          <p
            v-if="error"
            class="error"
          >
            {{ error }}
          </p>
          <form>
              <div class="Box">
                  <div class="BoxHeader"><label for="action">Langages de programmations, logiciels et autres...</label></div>
                  <h5 class="BoxTitre">Saisir vos idées en BAS</h5>
                  <p class="BoxTexte">Certains languages populaires ont été préajoutés.</p>
                  <input v-model="formData.tache" type="text" id="action" class="Entrer">
              </div>
              <button v-on:click.prevent="creationItem">Valider</button>
          </form>
          <ul>
          <li v-bind:key="index" v-for="(tache,index) in tableauTaches">
          <item v-bind:id="index" :tache="tache" :suppression="suppression"></item>
          </li>
          </ul>
        </article>
      </div>
    </main>
  <foot></foot>
  </div>
</template>

<script>
import Item from '../components/Item.vue'
import Foot from '../components/foot.vue'
export default {
  name: 'BrainstormInfo',

  data () {
    return {
      formData: {
        tache: ''
      },
      tableauTaches: ['JavaScript', 'Vue', 'Python', 'React'],
      error: ''
    }
  },

  methods: {
    creationItem: function () {
      if (!this.formData.tache) {
        return
      }
      this.tableauTaches.push(this.formData.tache)
      this.formData.tache = ''
    },

    suppression: function (e) {
      // console.log(e.target.parentNode.id)
      this.tableauTaches.splice(e.target.parentNode.id, 1)
    },

    getLangages () {
      fetch('/api/v1/langagesinfo')
        .then(res => res.json())
        .then(data => {
          for (const langages of data) {
            this.tableauTaches.push(langages)
          }
        })
        .catch(error => { this.error = error })
    }
  },

  created () {
    this.getLangages()
  },

  components: {
    item: Item,
    foot: Foot
  }
}
</script>

<style scoped>
.Box{
  position: relative;
  display: flex;
  width: 70%;
  flex-direction: column;
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0,0,0,.125);
  border-radius: .25rem;
  margin-bottom: 0.5rem;
  padding: 10px 15px 20px 15px;
}

.BoxHeader{
  text-align: center;
  padding: .75rem 1.25rem;
  margin-bottom: 0;
  background-color: rgba(0,0,0,0.03);
  border-bottom: 1px solid rgba(0,0,0,0.125);
}

.BoxTitle{
  font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";
  text-align: left;
}

.BoxTexte{
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
}

.Entrer{
  width: 50%;
  border-radius: 1rem;
  text-align: center;
  border-color: black;
  height: 20%;
  font-size: larger;
}
</style>
