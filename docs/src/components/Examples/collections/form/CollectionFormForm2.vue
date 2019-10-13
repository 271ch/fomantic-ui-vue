<template>
  <div>
    <div class="ui ignored hidden divider"/>
    <form class="ui form">
      <h4 class="ui dividing header">Shipping Information</h4>
      <div class="field">
        <label>Name</label>
        <div class="two fields">
          <div class="field">
            <input type="text" name="shipping[first-name]" placeholder="First Name"/>
          </div>
          <div class="field">
            <input type="text" name="shipping[last-name]" placeholder="Last Name"/>
          </div>
        </div>
      </div>
      <div class="field">
        <label>Billing Address</label>
        <div class="fields">
          <div class="twelve wide field">
            <input type="text" name="shipping[address]" placeholder="Street Address"/>
          </div>
          <div class="four wide field">
            <input type="text" name="shipping[address-2]" placeholder="Apt #"/>
          </div>
        </div>
      </div>
      <div class="two fields">
        <div class="field">
          <label>State</label>
          <select class="ui fluid dropdown">
          </select>
        </div>
        <div class="field">
          <label>Country</label>
          <div class="ui fluid search selection dropdown">
            <input type="hidden" name="country"/>
            <i class="dropdown icon"/>
            <div class="default text">Select Country</div>
          </div>
        </div>
      </div>
      <h4 class="ui dividing header">Billing Information</h4>
      <div class="field">
        <label>Card Type</label>
        <div class="ui selection dropdown">
          <input type="hidden" name="card[type]"/>
          <div class="default text">Type</div>
          <i class="dropdown icon"/>
          <div class="menu">
            <div class="item" data-value="visa">
              <i class="visa icon"/>
              Visa
            </div>
            <div class="item" data-value="amex">
              <i class="amex icon"/>
              American Express
            </div>
            <div class="item" data-value="discover">
              <i class="discover icon"/>
              Discover
            </div>
          </div>
        </div>
      </div>
      <div class="fields">
        <div class="seven wide field">
          <label>Card Number</label>
          <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>
        </div>
        <div class="three wide field">
          <label>CVC</label>
          <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>
        </div>
        <div class="six wide field">
          <label>Expiration</label>
          <div class="two fields">
            <div class="field">
              <select class="ui fluid search dropdown" name="card[expire-month]">
                <option value="">Month</option>
                <option value="1">January</option>
                <option value="2">February</option>
                <option value="3">March</option>
                <option value="4">April</option>
                <option value="5">May</option>
                <option value="6">June</option>
                <option value="7">July</option>
                <option value="8">August</option>
                <option value="9">September</option>
                <option value="10">October</option>
                <option value="11">November</option>
                <option value="12">December</option>
              </select>
            </div>
            <div class="field">
              <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>
            </div>
          </div>
        </div>
      </div>
      <h4 class="ui dividing header">Receipt</h4>
      <div class="field">
        <label>Send Receipt To:</label>
        <div class="ui fluid multiple search selection dropdown">
          <input type="hidden" name="receipt"/>
          <i class="dropdown icon"/>
          <div class="default text">Saved Contacts</div>
          <div class="menu">
            <div class="item" data-value="jenny" data-text="Jenny">
              <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>
              Jenny Hess
            </div>
            <div class="item" data-value="elliot" data-text="Elliot">
              <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>
              Elliot Fu
            </div>
            <div class="item" data-value="stevie" data-text="Stevie">
              <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>
              Stevie Feliciano
            </div>
            <div class="item" data-value="christian" data-text="Christian">
              <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>
              Christian
            </div>
            <div class="item" data-value="matt" data-text="Matt">
              <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>
              Matt
            </div>
            <div class="item" data-value="justen" data-text="Justen">
              <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>
              Justen Kitsune
            </div>
          </div>
        </div>
      </div>
      <div class="ui segment">
        <div class="field">
          <div class="ui toggle checkbox">
            <input type="checkbox" name="gift"/>
            <label>Do not include a receipt in the package</label>
          </div>
        </div>
      </div>
      <div class="ui button" tabindex="0">Submit Order</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'CollectionFormForm2',
  data: function () {
    return {
      converted: false,
      elementType: 'collections',
      element: 'form',
      title1: 'Types',
      title2: 'Form',
      description: 'A form',
      model: '    <div class="ui ignored hidden divider"/>\n' +
      '    <form class="ui form">\n' +
      '      <h4 class="ui dividing header">Shipping Information</h4>\n' +
      '      <div class="field">\n' +
      '        <label>Name</label>\n' +
      '        <div class="two fields">\n' +
      '          <div class="field">\n' +
      '            <input type="text" name="shipping[first-name]" placeholder="First Name"/>\n' +
      '          </div>\n' +
      '          <div class="field">\n' +
      '            <input type="text" name="shipping[last-name]" placeholder="Last Name"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="field">\n' +
      '        <label>Billing Address</label>\n' +
      '        <div class="fields">\n' +
      '          <div class="twelve wide field">\n' +
      '            <input type="text" name="shipping[address]" placeholder="Street Address"/>\n' +
      '          </div>\n' +
      '          <div class="four wide field">\n' +
      '            <input type="text" name="shipping[address-2]" placeholder="Apt #"/>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="two fields">\n' +
      '        <div class="field">\n' +
      '          <label>State</label>\n' +
      '          <select class="ui fluid dropdown">\n' +
      '          </select>\n' +
      '        </div>\n' +
      '        <div class="field">\n' +
      '          <label>Country</label>\n' +
      '          <div class="ui fluid search selection dropdown">\n' +
      '            <input type="hidden" name="country"/>\n' +
      '            <i class="dropdown icon"/>\n' +
      '            <div class="default text">Select Country</div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <h4 class="ui dividing header">Billing Information</h4>\n' +
      '      <div class="field">\n' +
      '        <label>Card Type</label>\n' +
      '        <div class="ui selection dropdown">\n' +
      '          <input type="hidden" name="card[type]"/>\n' +
      '          <div class="default text">Type</div>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="visa">\n' +
      '              <i class="visa icon"/>\n' +
      '              Visa\n' +
      '            </div>\n' +
      '            <div class="item" data-value="amex">\n' +
      '              <i class="amex icon"/>\n' +
      '              American Express\n' +
      '            </div>\n' +
      '            <div class="item" data-value="discover">\n' +
      '              <i class="discover icon"/>\n' +
      '              Discover\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="fields">\n' +
      '        <div class="seven wide field">\n' +
      '          <label>Card Number</label>\n' +
      '          <input type="text" name="card[number]" maxlength="16" placeholder="Card #"/>\n' +
      '        </div>\n' +
      '        <div class="three wide field">\n' +
      '          <label>CVC</label>\n' +
      '          <input type="text" name="card[cvc]" maxlength="3" placeholder="CVC"/>\n' +
      '        </div>\n' +
      '        <div class="six wide field">\n' +
      '          <label>Expiration</label>\n' +
      '          <div class="two fields">\n' +
      '            <div class="field">\n' +
      '              <select class="ui fluid search dropdown" name="card[expire-month]">\n' +
      '                <option value="">Month</option>\n' +
      '                <option value="1">January</option>\n' +
      '                <option value="2">February</option>\n' +
      '                <option value="3">March</option>\n' +
      '                <option value="4">April</option>\n' +
      '                <option value="5">May</option>\n' +
      '                <option value="6">June</option>\n' +
      '                <option value="7">July</option>\n' +
      '                <option value="8">August</option>\n' +
      '                <option value="9">September</option>\n' +
      '                <option value="10">October</option>\n' +
      '                <option value="11">November</option>\n' +
      '                <option value="12">December</option>\n' +
      '              </select>\n' +
      '            </div>\n' +
      '            <div class="field">\n' +
      '              <input type="text" name="card[expire-year]" maxlength="4" placeholder="Year"/>\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <h4 class="ui dividing header">Receipt</h4>\n' +
      '      <div class="field">\n' +
      '        <label>Send Receipt To:</label>\n' +
      '        <div class="ui fluid multiple search selection dropdown">\n' +
      '          <input type="hidden" name="receipt"/>\n' +
      '          <i class="dropdown icon"/>\n' +
      '          <div class="default text">Saved Contacts</div>\n' +
      '          <div class="menu">\n' +
      '            <div class="item" data-value="jenny" data-text="Jenny">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/jenny.jpg"/>\n' +
      '              Jenny Hess\n' +
      '            </div>\n' +
      '            <div class="item" data-value="elliot" data-text="Elliot">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/elliot.jpg"/>\n' +
      '              Elliot Fu\n' +
      '            </div>\n' +
      '            <div class="item" data-value="stevie" data-text="Stevie">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/stevie.jpg"/>\n' +
      '              Stevie Feliciano\n' +
      '            </div>\n' +
      '            <div class="item" data-value="christian" data-text="Christian">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/christian.jpg"/>\n' +
      '              Christian\n' +
      '            </div>\n' +
      '            <div class="item" data-value="matt" data-text="Matt">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/matt.jpg"/>\n' +
      '              Matt\n' +
      '            </div>\n' +
      '            <div class="item" data-value="justen" data-text="Justen">\n' +
      '              <img class="ui mini avatar image" src="/images/avatar/small/justen.jpg"/>\n' +
      '              Justen Kitsune\n' +
      '            </div>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui segment">\n' +
      '        <div class="field">\n' +
      '          <div class="ui toggle checkbox">\n' +
      '            <input type="checkbox" name="gift"/>\n' +
      '            <label>Do not include a receipt in the package</label>\n' +
      '          </div>\n' +
      '        </div>\n' +
      '      </div>\n' +
      '      <div class="ui button" tabindex="0">Submit Order</div>\n' +
      '    </form>\n',
    };
  },
};
</script>
