<template>
  <div>
    <div class="wrapper" id="wrapper">
        <div class="container">
            <div class="flex-wrap">
                <aside class="aside">
                    <a href="#" class="aside-link"></a>
                    <nav class="aside-menu">
                        <ul class="aside-menu__list">
                            <li class="aside-menu__list-item">
                                <a href="#" class="aside-menu__list-link aside-menu__list-link_active">
                                    Опросы
                                </a>
                            </li>
                            <li class="aside-menu__list-item">
                                <a href="#" class="aside-menu__list-link">
                                    Пользователи
                                </a>
                            </li>
                            <li class="aside-menu__list-item">
                                <a href="#" class="aside-menu__list-link">
                                    ЧС
                                </a>
                            </li>
                            <li class="aside-menu__list-item">
                                <a href="#" class="aside-menu__list-link">
                                    КЦ
                                </a>
                            </li>
                        </ul>
                    </nav>
                </aside>
                <main class="main">
                    <header class="header">
                        <div class="header-search">
                            <input 
                                name="input-search"
                                type="search"
                                class="inp inp-search"
                                placeholder="Поиск по системе"
                            >
                        </div>
                        <a class="user header-user">
                            <div class="user-img" :style="{'background-image': `url('${avatar}')`}"></div>
                            <div class="user-info">
                                <p class="user-info__name">
                                    Alexander X.
                                </p>
                                <p class="user-info__role">
                                    Администратор
                                </p>
                            </div>
                        </a>
                    </header>
                    <section class="content">
                        <div class="content-header">
                            <ul class="content-header__list">
                                <li class="content-header__list-item">
                                  <router-link
                                      to="/parameters">
                                      <button @click="activeTab = 1" type="button" :class="activeTab === 1 ? 'content-header__list-link content-header__list-link_active' : 'content-header__list-link'">
                                          Параметры
                                      </button>
                                  </router-link>
                                </li>
                                <li class="content-header__list-item">
                                  <router-link
                                      to="/question">
                                      <button @click="activeTab = 2" type="button" :class="activeTab === 2 ? 'content-header__list-link content-header__list-link_active' : 'content-header__list-link'">
                                          Вопросы
                                      </button>
                                  </router-link>
                                </li>
                                <li class="content-header__list-item">
                                  <router-link
                                      to="/logics">
                                      <button @click="activeTab = 3" type="button" :class="activeTab === 3 ? 'content-header__list-link content-header__list-link_active' : 'content-header__list-link'">
                                          Логика
                                      </button>
                                  </router-link>
                                </li>
                                <li class="content-header__list-item">
                                  <router-link
                                      to="/conditions">
                                      <button @click="activeTab = 4" type="button" :class="activeTab === 4 ? 'content-header__list-link content-header__list-link_active' : 'content-header__list-link'">
                                          Условия
                                      </button>
                                  </router-link>
                                </li>
                                <li class="content-header__list-item">
                                  <router-link
                                      to="/respondents">
                                      <button @click="activeTab = 5" type="button" :class="activeTab === 5 ? 'content-header__list-link content-header__list-link_active' : 'content-header__list-link'">
                                          Респоденты
                                      </button>
                                  </router-link>
                                </li>
                            </ul>
                        </div>
                        <div class="content-body">
                          <router-view></router-view>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  data () {
    return {
        activeTab: 1,
        avatar: require('@/assets/avatar.jpg'),
    }
  },
  mounted () {
      this.$store.dispatch('logics/GET_LOGICS')
      this.$store.dispatch('conditions/GET_CONDITIONS')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style.scss';
</style>
