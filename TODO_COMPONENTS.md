# Паритет Eve с Ant Design

**Целевой ориентир набора компонентов:** исходники [Ant Design](https://github.com/ant-design/ant-design) в репозитории [`references/ant-design`](../../ant-design/components) (каталог `components/*`). Сверяем покрытие и сценарии использования с этой библиотекой, а не только с внутренним `@mo/ui`.

**Про «полный паритет»:** часть сценариев в `$mol` уже закрыта готовыми модулями проще и короче; дублировать их в Eve смысла может не быть — такие случаи отмечаем и возвращаемся к решению позже.

**Дополнительные референсы:** [design-hypothesis](../../design-hypothesis/README.md) (Surface + идеи вёрстки), `@mo/ui` в `packages/ui` — где удобно переносить токены/паттерны банка. Доступность и роли — [WAI-ARIA APG](https://www.w3.org/WAI/ARIA/apg/patterns/) (рядом с зеркалом спецификаций в `references/w3c.github.io`). Именование в Eve: вторая опора к **Surface** — модуль **`text`** / **`$eve_text_*`** (у Ant — `Typography`). Провайдеры саббренда MO не обязательны для Eve (см. [ADR 0001](../../../decisions/0001-colors/README.md)).

---

## Уже есть в Eve (база под паритет)

Button, Surface, Flex, Page, Alert, Card, Checkbox (+ group), Radio (+ group), Switch, Tabs, Segmented, Chip, Avatar, Slider, Badge, Empty, Pagination, input/logical (часть data entry), Book/playground приложение.

---

## General

- [ ] **FloatButton**
- [ ] **Typography** → **Text** (`eve/text/`, `$eve_text_*`)
- [ ] **Divider**
- [ ] **Grid** — Row, Col
- [ ] **Layout** — Header, Sider, Content, Footer
- [ ] **Space**
- [ ] **Splitter**
- [ ] **Masonry**

---

## Navigation

- [ ] **Affix**
- [ ] **Breadcrumb** (+ ellipsis)
- [ ] **Dropdown**
- [ ] **Menu** — inline, vertical, selectable
- [ ] **Pagination**
- [ ] **Steps**
- [x] **Tabs** — есть, выровнять API/доступность под Ant при необходимости

---

## Data Entry

- [ ] **AutoComplete**
- [ ] **Cascader**
- [x] **Checkbox** — есть (+ Checkbox Group); выровнять с Ant
- [ ] **ColorPicker**
- [ ] **DatePicker** / **TimePicker** / **Calendar** (см. также Data Display)
- [ ] **Form** — FormItem, правила, сообщения
- [ ] **Input** — text, textarea, search, password
- [ ] **InputNumber**
- [ ] **Mentions**
- [ ] **Input.OTP**
- [x] **Radio** — есть (+ Radio Group)
- [ ] **Rate**
- [ ] **Select** — single / multiple / virtual scroll
- [ ] **Slider**
- [x] **Switch**
- [ ] **Transfer**
- [ ] **TreeSelect**
- [ ] **Upload**

---

## Data Display

- [ ] **Avatar** (+ группа)
- [ ] **Badge** / **Ribbon**
- [ ] **Calendar**
- [x] **Card**
- [ ] **Carousel**
- [ ] **Collapse**
- [ ] **Descriptions**
- [ ] **Empty**
- [ ] **Image** — превью, fallback
- [ ] **List**
- [ ] **Popover**
- [ ] **QRCode**
- [x] **Segmented**
- [ ] **Statistic**
- [ ] **Table** — сортировка, фильтры, виртуализация
- [ ] **Tag** — закрываемый, цвета
- [ ] **Timeline**
- [ ] **Tooltip**
- [ ] **Tour**
- [ ] **Tree**

---

## Feedback

- [x] **Alert**
- [ ] **Drawer**
- [ ] **Message** — глобальные тосты/сообщения
- [ ] **Modal** — confirm, useModal
- [ ] **Notification**
- [ ] **Popconfirm**
- [ ] **Progress** — line, circle, steps
- [ ] **Result**
- [ ] **Skeleton**
- [ ] **Spin**
- [ ] **Watermark**

---

## Прочее (оболочка, утилиты)

- [ ] **App** — контекст сообщений/модалок
- [ ] **ConfigProvider** / аналог темы Eve (см. ниже)
- [ ] **Anchor**
- [ ] **BackTop**
- [ ] **Locale** — i18n слой при необходимости

---

## Инфраструктура темы Eve

- [ ] **Тема в духе `$mol`:** короткие пресеты (`wb-classic-dark`, `wb-classic-light`, …), без обязательного переноса MO **subbrand-provider** (см. ADR 0001).
- [ ] **Themer** в `eve/app` — согласовать с пресетами и с тем, как Ant задаёт токены через `ConfigProvider` / `theme`.

---

## Как добавлять

Модуль в `eve/<имя>/`, FQN `$eve_<путь_через_underscore>`, по возможности `*.test.ts` с `$mol_test`, страница в `eve/app/page/components/`. Для паритета с Ant сверять пропсы, состояния, a11y и примеры из `references/ant-design/components/<name>/demo`.
