<script lang="ts" setup>
  


</script>

<template>
  <main>
    <AppHero title="NOTES"/>
    <div class="content">
      <ul class="list">
        <li class="list-item">
          <BlackBox>
            <JumpingBall />
          </BlackBox>
        </li>
        <li class="list-item">
          <BlackBox>
            <CosSin />
          </BlackBox>
        </li>
        <li class="list-item">
          <BlackBox>
            <CosSin />
          </BlackBox>
        </li>
        <li class="list-item">
          <BlackBox>
            <CosSin />
          </BlackBox>
        </li>
      </ul>
    </div>

  </main>
</template>


<style lang="scss" scoped>

.content {
  inline-size: min(90%, 968px);
  margin-inline: auto;
}

.list {
  inline-size: 100%;
  list-style: none;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, (minmax(min(150px, 100%), 1fr)));
  gap: 10px;
  justify-content: space-between;
}


</style>