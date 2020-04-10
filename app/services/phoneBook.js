function phone(string, num) {
  const name_regx = string.match(/[<](.*?)[>]/g)
  const adress_regx1 = string.match(/\s[a-zA-Z].+/g)
  const adress_regx2 = string.match(/[>](\s\w.+)/g)
  const phone_numbers = string.match(/\+[0-9]{1,2}[-][0-9]+[-][0-9]+[-][0-9]+/g)
  let found = [],
      response = ""
  phone_numbers.find((phone_number) => {
    if(phone_number.replace('+','') == num){
      found.push(phone_number)
    }
  })

  if(found.length == 1){
    let arr_string = string.split("\n")
    let names = []
    let addresses = []
    let phones = []
    arr_string.find((el)=>{
      var name = el.match(/[<](.*?)[>]/g)
      var address = el.match(/\s[\d+a-zA-Z].+\./g)
      var address1 = el.match(/[>](\s\w.+)/g)
      var address2 = el.match(/[!>][\s][\d+a-zA-Z].+\.\s\w+/g)
      var address3 = el.match(/\s[a-zA-Z].+/g)
      var telephone = el.match(/\+[0-9]{1,2}[-][0-9]+[-][0-9]+[-][0-9]+/g)

      if(telephone != null && telephone[0].replace('+', '') == num){
        phones.push(telephone[0].replace('+', ''))

        if(name != null){
          names.push(name[0].replace('<','').replace('>',''))
        }

        if(address != null){
          addresses.push(address[0].replace(telephone[0], '').replace('_', ' ').replace('; ', '').replace('$ ', '').trim())
        }
        else if(address3 != null){
          addresses.push(address3[0].replace('<', '').replace('>', '').replace('_', ' ').replace(telephone[0], '').replace('; ', '').replace('$ ', '').trim())
        }

        if(address1 != null){
          addresses.push(address1[0].replace('<', '').replace('>', '').replace('_', ' ').replace(telephone[0], '').replace('; ', '').replace('$ ', '').trim())
        }

        if(address2 != null){
          addresses.push(address2[0].replace('<', '').replace('>', '').replace('_', ' ').replace(telephone[0], '').replace('; ', '').replace('$ ', '').trim())
        }

      }
    })

    if(addresses[1] != undefined) {
      response = "Phone => "+ phones[0] +", Name => "+ names[0] +", Address => "+ addresses[1]
    }
    else if(addresses[0] != undefined){
      response = "Phone => "+ phones[0] +", Name => "+ names[0] +", Address => "+ addresses[0]
    }
    else if(addresses[2] != undefined){
      response = "Phone => "+ phones[0] +", Name => "+ names[0] +", Address => "+ addresses[2]
    }
    else if(addresses[3] != undefined){
      response = "Phone => "+ phones[0] +", Name => "+ names[0] +", Address => "+ addresses[3]
    }
  }
  else if(found.length > 1){
    response = "Error => Too many people: " + num
  }
  else {
    response = "Error => Not found: " + num
  }

  return response
}

module.exports = phone;
