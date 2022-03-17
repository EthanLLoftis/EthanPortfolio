import $ from 'jquery';

const showAbout = () => {
    $('#bioWrap').show();
    $('#courseWrap').hide();
    $('#techWrap').hide();
    $('#expWrap').hide();
    $('#projWrap').hide();
    
}

const showCourses = () => {
    $('#bioWrap').hide();
    $('#courseWrap').show();
    $('#techWrap').hide();
    $('#expWrap').hide();
    $('#projWrap').hide();
}

const showTech = () => {
    $('#bioWrap').hide();
    $('#courseWrap').hide();
    $('#techWrap').show();
    $('#expWrap').hide();
    $('#projWrap').hide();
}

const showExp = () => {
    $('#bioWrap').hide();
    $('#courseWrap').hide();
    $('#techWrap').hide();
    $('#expWrap').show();
    $('#projWrap').hide();
}

const showProj = () => {
    $('#bioWrap').hide();
    $('#courseWrap').hide();
    $('#techWrap').hide();
    $('#expWrap').hide();
    $('#projWrap').show();
}

export {
    showAbout,
    showCourses,
    showExp,
    showProj,
    showTech,
}