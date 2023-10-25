// 必須
const isRequired = function (value) {
  return value === '' ? false : true;
};

const required = function (elem) {
  const elemValue = elem.value.trim(); 
  return elemValue.length === 0 ? false : true;
};

const checkRequired = function (elem) {
  if(elem.value.trim().length > 0){
    return true;
  }else{
    return false;
  }
};

const chkHissu = function (frm){
  var hissu=["name","age","sex","comment"];
  var len=hissu.length;
  for(i=0; i<len; i++){
    var obj=frm.elements[hissu[i]];
    if(obj.type=="text" || obj.type=="textarea"){
      if(obj.value==""){
        frm.elements[hissu[i]].focus();
        return false;
      }
    }else{
      for(var j=0, chk=0; j<obj.length; j++){
        if(obj[j].checked) chk++;
      }
      if(chk==0){
        return false;
      }
    }
  }
  return true;
};

// 範囲
const isBetween = function (length, min, max) {
  return length < min || length > max ? false : true;
};

// メール
const isEmailValid = function (email) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

const email = function (elem) {
  const pattern = /^([a-z0-9\+_\-]+)(\.[a-z0-9\+_\-]+)*@([a-z0-9\-]+\.)+[a-z]{2,6}$/ui;
  if(elem.value !=='') {
    return !pattern.test(elem.value) ? false : true;
  }
  return false;
};

const checkMail = function (elem) {
  if(elem.value.match(/^([a-z0-9_\.\-])+@([a-z0-9_\.\-])+[^.]$/i)){
    return true;
  }else{
    return false;
  }
};

const chkRegEmail = function (str) {
  var Seiki=/[!#-9A-~]+@+[a-z0-9]+.+[^.]$/i;
  if(str!=""){
    if(str.match(Seiki)){
      return true;
    }else{
      return false;
    }
  }else{
    return false;
  }
};

// 電話
const tel = function (elem) {
  const pattern = /^\(?\d{2,5}\)?[-(\.\s]{0,2}\d{1,4}[-)\.\s]{0,2}\d{3,4}$/;
  if(elem.value !=='') {
    return !pattern.test(elem.value) ? false : true;
  }
  return false;
};

// 最大
const maxlength = function (elem) {
  const maxlength = elem.dataset.maxlength;
  if(elem.value !=='') {
    return elem.value.length > maxlength ? false : true;
  }
  return false;
};

// 等しい
const equal = function (elem) {
  const equalToId = elem.dataset.equalTo;
  const equalToElem = document.getElementById(equalToId);
  if(elem.value !=='' && equalToElem.value !==''){
    return equalToElem.value !== elem.value ? false : true;
  }
  return false;
};


// パスワード
const isPasswordSecure = function (password) {
  const re = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
  return re.test(password);
};

// 数値
const isNum = function (obj) {
  var str=obj.value;
  for(var i=0 ; i<str.length; i++){
    var code=str.charCodeAt(i);
    if ((48>code || code>57)){
      /* 数値（0-9）以外の文字コード範囲 */
      return false;
    }
  }
  return true;
};

const isRegNum = function (obj) {
  var str=obj.value;
  if (str.match(/[^0-9]/g)){
    alert (str.match(/[^0-9]/g)+"\n\n数値以外が含まれています");
    return false;
  }
  return true;
};

const chkNum = function (obj) {
  var num="0123456789+-.=";
  var tmp=[];
  for(var i=0; i<obj.length; i++){
    tmp[i]=obj.substring(i,i+1);
    var flag=num.indexOf(tmp[i]);
    if(flag==-1){
      return flag;
    }
  }
  return true;
};

// 数字とハイフン記号
const numAndHyphen = function (elem) {
  if( ( elem.value != '') && ( elem.value.match( /[\d\-]+/ )) ) {
    return true;
  } else {
    return false;
  }
};

// 英字と特定の記号
const alphabetSymbols = function (elem) {
  if( ( elem.value != '') && ( elem.value.match( /[a-zA-Z_!#%&]/ )) ) {
    return true;
  } else {
    return false;
  }
};

// 英数字
const alphabet = function (elem) {
  if (elem.value.match(/[0-9 ０-９ a-z ａ-ｚ A-Z Ａ-Ｚ]/g)){
    return true;
  } else {
    return false;
  }
};

// 半角英数字
const isHanAlpha = function (obj) {
  var str=obj.value;
  for(var i=0 ; i<str.length; i++){
    var code=str.charCodeAt(i);
    if ((65<=code && code<=90) || (97<=code && code<=122) || 
      str.substr(i,1)==' ') {
      /* 半角英字（a-z,A-Z）の文字コード範囲 */
      /* 半角スペースも許容 */
    }else{
      return false;
    }
  }
  return true;
};

// ひらがな・カタカナ
const hiraganaKatakana = function (elem) {
  var alertelement = this.parentNode.getElementsByClassName('alertarea');
  if( ( this.value != '') && ( this.value.match( /[ぁ-んァ-ヶー\s]/ )) ) {
    return true;
  } else {
    return false;
  }
};

// 全角
const isZen = function (obj) {
  var str=obj.value;
  for(var i=0; i<str.length; i++){
    /* 1文字ずつ文字コードをエスケープし、その長さが4文字以上なら全角 */
    var len=escape(str.charAt(i)).length;
    if(len>=4){
      return true;
    }
  }
  return false;
};

// 全角カナ
const isZenKana = function (obj) {
  var zen="アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンァィゥェォッャュョ";
  var str=obj.value;
  var mes="";
  for (var i=0; i<str.length; i++) {
    var tmp1=str.substr(i,1);
    for (var j=0; j<zen.length; j++) {
      var tmp2=zen.substr(j,1);
      if (tmp1==tmp2) {
        mes+="「"+tmp1+"」";
      }
    }
  }
  if(mes!=""){
    return true;
  }else{
    return false;
  }
};

// 半角
const isHan = function (obj){
  var str=obj.value;
  for (var i=0; i<str.length; i++) {
    /* 1文字ずつ文字コードをエスケープし、その長さが4文字未満なら半角 */
    var len=escape(str.charAt(i)).length;
    if (len<4){
    }else{
      return false;
    }
  }
  return true;
};

const isRegHan = function (obj) {
  str=obj.value;
  /* 半角英数字(0-9)、四則演算子(+-/*)、ピリオド(.)、カンマ(,)のみ */
  var tmp=str.match(/[0-9a-zA-Z\+\-\/\*\,\. ]+/g);
  /* matchメソッドの返り値が入力値と等しい場合は、全て半角 */
  if (tmp!=str){
      return false;
  }else{
      return true;
  }
};

// 半角カナ
const isHanNumAlpha = function (obj) {
  var str = obj.value;
  for (var i=0 ; i<str.length; i++) {
      var code=str.charCodeAt(i);
      if ((48<=code && code<=57) || 
      (65<=code && code<=90) || (97<=code && code<=122) ||
        str.substr(i,1)==" ") {
      /* 半角数字（0-9）の文字コード範囲 */
      /* 半角英字（a-z,A-Z）の文字コード範囲 */
      /* 半角スペースも許容 */
      }else{
        return false;
      }
  }
  return true;
};

// 最低文字数
const minimumNumberOfCharacters = function (elem) {
  if( elem.value.trim().length >= 2 ) {
    return true;
  } else {
    return false;
  }
};

// 最大文字数
const maxLen = function (elem) {
  if(elem.value.length <= 10){
    return true;
  }else{
    return false;
  }
};

const chkMaxLength = function (obj, strLength) {
  var tmpLength=obj.value.length;
  if(tmpLength > strLength) {
    return false;
  } else if(tmpLength == strLength) {
    return true;
  } else {
    return true;
  }
};

