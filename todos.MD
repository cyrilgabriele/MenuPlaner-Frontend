1. Refactor the handleMenuIdeaUser() in the MenuForm.vue
    1.1 otusource the function and import it as a module
2. Refactor the AcceptButton.vue 
    2.1 outsource the handleAcceptMenu() and import it again
3. Move the AcceptButton.vue into MenuTable instead of MenuForm.vue
4. Fix that the LLM responses includes as well a title for the meal => display then in MenuTable only the Title and @click popup a new component (i.e. Meal) the whole description and the recipe => recipe should be fetched from the LLM as soon as first fetch is done.