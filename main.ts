const tagBtns = document.querySelector('.btns')! as HTMLElement;
const inputGroups = document.querySelector('.input-group')! as HTMLElement;
const tagNameSpans = document.querySelectorAll(
  '.input-group__span'
)! as NodeListOf<HTMLElement>;
const inputText = document.querySelector(
  '.input-group__input'
)! as HTMLInputElement;
const inputGroupBottom = document.querySelector(
  '.input-group__bottom'
)! as HTMLElement;
const fibot = document.querySelector('.fibot')! as HTMLElement;

let clickedTag: string | null = null;

tagBtns.addEventListener('click', (e: MouseEvent) => {
  const target = e.target! as HTMLElement;
  if (target.className !== 'btns__tag') return;
  showInputGroup();
  setClickedTag(target.textContent!);
  inputTagNameSet(target.textContent!);
});

inputGroupBottom.addEventListener('click', (e: MouseEvent) => {
  const target = e.target! as HTMLElement;
  if (target.className.split(' ')[0] !== 'input-group__insert') return;
  const moveName = target.textContent?.trim()! as string;
  const tagNode = makeNode(clickedTag as string, inputText.value);
  const cloneNode = makeCloneNode(tagNode);

  //1 단계 클릭시 생기게하기
  attachToInputGroup(cloneNode);
  const { top: cTop, left: cLeft } = cloneNode.getBoundingClientRect();

  //2 단계 위로 조금 올라가기
  setTimeout(() => fisrstStepMoveCloneNode(cloneNode, moveName), 1000);
  setTimeout(
    () => secondStepMoveCloneNode(cloneNode, moveName, cTop, cLeft),
    2000
  );
  setTimeout(() => {
    thridStepRemoveCloneNode(cloneNode);
    nodeAttachToFibot(tagNode, moveName! as string);
  }, 3000);
});

function thridStepRemoveCloneNode(cloneNode: HTMLElement) {
  cloneNode.remove();
}

function secondStepMoveCloneNode(
  cloneNode: HTMLElement,
  position: string,
  cTop: number,
  cLeft: number
) {
  const { top, left, bottom } = fibot.getBoundingClientRect();

  let 이동시킬X = cLeft - left;
  let 이동시킬Y = 0;

  if (
    position === 'before' ||
    position === 'beforebegin' ||
    position === 'prepend' ||
    position === 'afterbegin'
  ) {
    이동시킬Y = top - cTop;
  } else {
    이동시킬Y = bottom - cTop;
  }
  cloneNode.style.transform = `translate(-${이동시킬X}px, ${이동시킬Y}px)`;
}

function fisrstStepMoveCloneNode(cloneNode: HTMLElement, position: string) {
  if (
    position === 'prepend' ||
    position === 'before' ||
    position === 'beforebegin' ||
    position === 'afterbegin'
  ) {
    cloneNode.style.transform = 'translateY(-200px) scale(1.5)';
  } else {
    cloneNode.style.transform = 'translateY(200px) scale(1.5)';
  }
}

function attachToInputGroup(cloneNode: HTMLElement) {
  inputGroups.prepend(cloneNode);
}

function makeCloneNode(node: HTMLElement) {
  const cloneNode = node.cloneNode(true) as HTMLElement;
  cloneNode.classList.add('input-group__shadow--effect');

  return cloneNode;
}

function moveEffect(node: HTMLElement) {
  const cloneNode = node.cloneNode(true) as HTMLElement;
  cloneNode.classList.add('input-group__shadow--effect');
  inputGroups.prepend(cloneNode);
}

function makeNode(tagName: string, text: string) {
  const node = document.createElement(tagName);
  node.classList.add('fibot--line');
  node.innerText = text;
  inputText.value = '';
  return node;
}

function nodeAttachToFibot(node: HTMLElement, position: string) {
  switch (position) {
    case 'before':
    case 'beforebegin':
      fibot.before(node);
      break;
    case 'prepend':
    case 'afterbegin':
      fibot.prepend(node);
      break;
    case 'append':
    case 'beforeend':
      fibot.append(node);
      break;
    case 'after':
    case 'afterend':
      fibot.after(node);
      break;
  }
}

function showInputGroup() {
  inputGroups.style.display = 'block';
}

function setClickedTag(tag: string) {
  clickedTag = tag;
}

function inputTagNameSet(tagName: string) {
  tagNameSpans[0].textContent = `<${tagName}>`;
  tagNameSpans[1].textContent = `</${tagName}>`;
}
