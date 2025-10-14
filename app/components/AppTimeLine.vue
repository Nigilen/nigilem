<script lang="ts" setup></script>

<template>
  <div class="timeline container">
    <h2 class="section-title timeline__title">Опыт Frontend</h2>
    <dl class="timeline__list">
      <div class="timeline__item timeline-item">
        <dt class="timeline-item__term">
          2019 - 2020
        </dt>
        <dd class="timeline-item__desc">
          Art Director - Facebook Inc.
        </dd>
        <dd class="timeline-item__details">
          Collaborate with creative and development teams on the execution of ideas.
        </dd>
      </div>
      <div class="timeline__item timeline-item">
        <dt class="timeline-item__term">
          2011 - 2020
        </dt>
        <dd class="timeline-item__desc">
          Front-End Developer - Google Inc.
        </dd>
        <dd class="timeline-item__details">
          Monitored technical aspects of the front-end delivery for projects.
        </dd>
      </div>
      <div class="timeline__item timeline-item">
        <dt class="timeline-item__term">
          2011 - 2020
        </dt>
        <dd class="timeline-item__desc">
          Senior Developer - ABC Inc.
        </dd>
        <dd class="timeline-item__details">
          Optimize your website and apps performance using latest technology.
        </dd>
      </div>
    </dl>
  </div>
</template>

<style lang="scss" scoped>

.timeline {

}


.timeline-item {
  position: relative;
  display: flex;
  flex-direction: column;
  padding-block-end: 52px;
  row-gap: 13px;

  &__term {
    display: block;
    border: 1px solid #E17346;
    color: #E17346;
    inline-size: max-content;
    padding: 5px 7px;
    font-size: 0.75rem;
    margin-inline-start: 2rem;
  }
  
  &__desc {
    margin-inline-start: 2rem;
    font-size: 0.875rem;
  }
  
  &__details {
    margin-inline-start: 2rem;
    font-size: 0.875rem;
  }

  &:not(:last-child)::before {
    position: absolute;
    content: "";
    display: block;
    inline-size: 2rem;
    block-size: 100%;
    border-left: 1px solid #E17346;
    border-bottom: 1px solid #E17346;
    margin-block-start: .8rem;
  }

  &:first-child::before {
    border-left: 1px solid #E17346;
    border-top: 1px solid #E17346;
  }

}

</style>