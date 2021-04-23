<template>
  <div>
    <h2 class="content-body__title color-secondary">
      Добавить опрос
    </h2>
    <div :class="{'content-body__group bg-worm': item.selected === '1', 'content-body__group bg-ocean-light': item.selected === '2', 'content-body__group bg-primary-light': item.selected === '3'}" v-for="(item, index) in respondents" :key="item.num">
        <span :class="{'span-and content-body__span-and bg-primary-light': item.selected === '1', 'span-and content-body__span-and bg-ocean': item.selected === '2' || item.selected === '3'}" v-if="respondents.length > 1 && index !== 0">И</span>
        <div class="content-body__item flex-rov">
            <h3 class="content-body__item-title color-warning flex-rov__25">
                Условие {{ index + 1 }}
            </h3>
            <div class="content-body__item-select flex-rov__75">
                <select name="select-1" id="select-1" class="select" v-model="item.selected" :disabled="item.range.length > 0 || item.type.length > 0 || item.status.length > 0">
                    <option value="1">Возраст респондента</option>
                    <option value="2">Тип карты лояльности</option>
                    <option value="3">Статус карты лояльности</option>
                </select>
            </div>
        </div>
        <div class="content-body__item flex-rov" v-for="(el, index) in item.type" :key="index">
            <h3 class="content-body__item-title flex-rov__25">
                Тип {{ index + 1}}
            </h3>
            <div class="content-body__item-select flex-rov__75">
                <select name="select-1" id="select-1" class="select max-w-75">
                    <option value="1">Gold</option>
                    <option value="2">Silver</option>
                    <option value="3">VIP</option>
                </select>
            </div>
        </div>
        <div class="content-body__item flex-rov" v-for="(el, index) in item.range" :key="index">
            <h3 class="content-body__item-title flex-rov__25">
                Диапазон {{ index + 1 }}
            </h3>
            <div class="content-body__item-inpts input-group flex-rov__75">
                <div class="input-group__item">
                    <label for="input-d-1" class="input-group__item-label">
                        От
                    </label>
                    <input v-model="el.start" id="input-d-1" name="input-d-1" type="text" class="input-group__item-inp inp">
                </div>
                <div class="input-group__item">
                    <label for="input-d-2" class="input-group__item-label">
                        До
                    </label>
                    <input v-model="el.end" id="input-d-2" name="input-d-2" type="text" class="input-group__item-inp inp">
                </div>
            </div>
        </div>
        <div class="content-body__item flex-rov" v-for="(el, index) in item.status" :key="index">
            <h3 class="content-body__item-title flex-rov__25">
                Статус {{ index + 1}}
            </h3>
            <div class="content-body__item-select flex-rov__75">
                <select name="select-1" id="select-1" class="select max-w-75">
                    <option value="1">Активна</option>
                    <option value="2">Неактивна</option>
                </select>
            </div>
        </div>
        <div class="content-body__item flex-rov">
            <div class="content-body__item-inpts flex-rov__75 ">
                <div class="btn-group">
                    <button class="content-body__btn btn btn-warning" @click="addRange(item)" v-if="item.selected === '1'">Добавить диапазон</button>
                    <button class="content-body__btn btn btn-warning" @click="addType(item)" v-if="item.selected === '2'">Добавить тип</button>
                    <button class="content-body__btn btn btn-warning" @click="addStatus(item)" v-if="item.selected === '3'">Добавить статус</button>
                    <button class="content-body__btn btn btn-danger" @click="delItem(item)">Удалить условие</button>
                </div>
            </div>
        </div>
    </div>
    <div class="content-body__add-group" @click="addItem">
        <p>Нажмите,чтобы добавить новое условие выборки. Все условия связываются между собой лигическим "И"</p>
    </div>
    <div>
        <button class="content-body__btn btn btn-save" @click="saveRespondent">Сохранить</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Respondents',
  data () {
    return {
        num: 0,
        respondents: []
    }
  },
  methods: {
      saveRespondent () {
          if (!this.respondents.length) {
              console.log('Нужно хотя бы одно условие')
              return
          }
          let range = this.respondents.filter((val) => {
              return val.selected === '1'
          })
          let type = this.respondents.filter((val) => {
              return val.selected === '2'
          })
          let status = this.respondents.filter((val) => {
              return val.selected === '3'
          })
          if (range.length > 1 || type.length > 1 || status.length > 1) {
              console.log('Недопустимы одинаковые условия')
              return
          }
          this.$store.dispatch('respondents/POST_RESPONDENTS', this.respondents)
      },
      addRange (item) {
          for (let el of this.respondents) {
              if (el.num === item.num) {
                  let newEl = {
                      start: '',
                      end: ''
                  }
                  el.range.push(newEl)
              }
          }
      },
      addType (item) {
          for (let el of this.respondents) {
              if (el.num === item.num) {
                  let newEl = {
                      selectedType: '1'
                  }
                  el.type.push(newEl)
              }
          }
      },
      addStatus (item) {
          for (let el of this.respondents) {
              if (el.num === item.num) {
                  let newEl = {
                      selectedStatus: '1'
                  }
                  el.status.push(newEl)
              }
          }
      },
      addItem () {
          let newEl = {
            num: ++this.num,
            selected: '1',
            range: [],
            type: [],
            status: []
          }
          this.respondents.push(newEl)
      },
      delItem (item) {
          this.respondents = this.respondents.filter((val)=> {
            return val.num !== item.num
          })
      }
  },
  computed: {
      conditions () {
          let copy = []
          for (let el of this.$store.getters['conditions/CONDITIONS']) {
              let newEl = {
                  value: el.id,
                  title: el.title
              }
              copy.push(newEl)
          }
          return copy
      }
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
</style>
