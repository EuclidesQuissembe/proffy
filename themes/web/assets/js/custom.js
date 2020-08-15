$(function () {
  "use strict"

  /**
   * AJAX
   */
  $("form").on('submit', function (e) {
    e.preventDefault()

    let $form = $(this)

    let arrayJson = makeArray()
    let data = []

    if (arrayJson.length === 0) {
      data = $form.serializeArray()

    } else {

      let parse = JSON.stringify(arrayJson)
      console.log(parse)

      data = [
        { name: "full_name", value: this.elements[0].value },
        { name: "photo_link", value: this.elements[1].value },
        { name: "whatsapp", value: this.elements[2].value },
        { name: "bio", value: this.elements[3].value },
        { name: "matter", value: this.elements[4].value },
        { name: "price", value: this.elements[5].value },
        { name: "week", value: this.elements[6].value },
        { name: "start", value: this.elements[7].value },
        { name: "end", value: this.elements[8].value },
        { name: "hours", value: parse }
      ]
    }

    $.ajax({
      type: 'POST',
      url: $form.attr('action'),
      data,
      dataType: 'json',
      beforeSend: function () {
        // confirm("Posso enviar os dados?")
      },
      success: function (response) {

      },
      error: function (err) {
        console.log(err)
      }
    })
  })

  function makeArray() {

    let json = []

    $("[class*='clone-']").each((index, value) => {
      let $element = $(value)

      let selectValue = $element.find('select').val()
      let startValue = $element.find('input[type=time]')[0].value
      let endValue = $element.find('input[type=time]')[1].value

      let object = {
        day: selectValue,
        start: startValue,
        end: endValue
      }

      json.push(object)

    })

    return json
  }

  function closePopup() {
    $('.popup').css('display', 'none')
    $('body').css('overflow', 'auto')
  }

  function remover() {

    let top = 250
    let left = $(window).width() - $(this).offset().left

    console.log(top, left)

    $('.popup')
      .css('display', 'block')
      .on('click', closePopup)

    $('body').css('overflow', 'hidden')

    $('.btn-cancelar').on('click', closePopup)

    $('.delete-hour').css({ top, left })

    let div = $(this.parentNode)

    $('.btn-remover').on('click', function () {
      let parent = $(div)[0].parentElement
      $(parent).remove()
      closePopup()
    })
  }

  var clone = $('#group').html(); //clona o elemento
  var count = 0

  $('.add').on("click", function () {

    let $element = $(clone)

    $element.addClass(`clone-${count}`)

    // Getting select
    let $select = $element.find('#week')
    $select.attr('id', `week-${count}`)
    $select.attr('name', `week-${count}`)

    // Getting from
    let $start = $element.find('#start')
    $start.attr('id', `start-${count}`)
    $start.attr('name', `start-${count}`)

    // Getting to
    let $end = $element.find('#end')
    $end.attr('id', `end-${count}`)
    $end.attr('name', `end-${count}`)

    $element.find('span.remove').on("click", remover);

    count++
    $('#group').append($element);
  });
})