const array = [47389, 43, 789, 890]
var num = 789

function checkArray(array, num) {
for (var i = 0; i < array.length; i++) {
  if (array[i] == num)
    document.write(i + 'true')
    else {
      if (array[i] !== num)
          document.write(i + 'false')
        }
      }
    }
