  window.onload = function() {
      var retel = /^1[3|4|5|7|8]\d{9}$/;
      var remes = /^[0-9]{4}$/;
      var reqq = /^[1-9]\d{4,}$/
      var rename = /^[\u4e00-\u9fa5]{2,8}$/
      var repwd = /^[a-zA-Z0-9_-]{6,16}$/
      var tel = document.querySelector('#tel');
      var mes = document.querySelector('#mes');
      var qq = document.querySelector('#qq');
      var name = document.querySelector('#name');
      var pwd = document.querySelector('#pwd');
      var okpwd = document.querySelector('#okpwd')
      //找到元素正确是否对应的表现
      testOk(tel,retel);
      testOk(mes,remes);
      testOk(qq,reqq);
      testOk(name,rename);
      testOk(pwd,repwd)
      function testOk(ele,dat){
        ele.onblur = function(){
            if(dat.test(this.value)){
                  this.nextElementSibling.className = 'success';
                  this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 格式正确';
            }
            else{
              this.nextElementSibling.className = 'error';
              this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 格式不正确,重新输入';
            }
        }
      }
      okpwd.onblur = function(){
        if(this.value == pwd.value){
          this.nextElementSibling.className = 'success';
          this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 密码一致';
    }
    else{
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 两次密码不一致';
    }
      }
      pwd.onblur = function(){
        if(repwd.test(this.value)){
          this.nextElementSibling.className = 'success';
          this.nextElementSibling.innerHTML = '<i class="success_icon"></i> 设置成功';
    }
    else{
      this.nextElementSibling.className = 'error';
      this.nextElementSibling.innerHTML = '<i class="error_icon"></i> 6-16位数字字母下划线';
    }
      }
  }
  