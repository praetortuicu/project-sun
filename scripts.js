const buttons = document.querySelectorAll('.tab-button');
const contents = document.querySelectorAll('.tab-content');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const target = button.dataset.tab;

    contents.forEach(content => {
      content.classList.add('hidden');
    });

    document.getElementById(target).classList.remove('hidden');

    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});
