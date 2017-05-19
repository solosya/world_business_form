/**
 * Handlebar Article templates for listing
 */

var systemCardTemplate = 
'<div class="{{containerClass}} "> \
    <a  itemprop="url" \
        href="{{url}}" \
        class="card swap" \
        data-id="{{articleId}}" \
        data-position="{{position}}" \
        data-social="0" \
        data-article-image="{{{imageUrl}}}" \
        data-article-text="{{title}}"> \
        \
        <article class="">\
            {{#if hasMedia}}\
                <figure>\
                    <img class="img-responsive lazyload" data-original="{{imageUrl}}" src="{{imageUrl}}" style="background-image:url("{{placeholder}}"")>\
                </figure>\
            {{/if}} \
        \
            <div class="content">\
                    <div class="category">{{label}}</div>\
                    <h2>{{{ title }}}</h2>\
                    <p>{{{ excerpt }}}</p>\
                    <div class="author">\
                        <img src="{{profileImg}}" class="img-circle">\
                        <p>{{ createdBy.displayName }}</p>\
                    </div>\
            </div>\
        </article>'+
        
        '{{#if userHasBlogAccess}}'+
            '<div class="btn_overlay articleMenu">'+
                '<button title="Hide" data-guid="{{guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="0">'+
                    '<i class="fa fa-eye-slash"></i><span class="hide">Hide</span>'+
                '</button>'+
                '<button onclick="window.location=\'{{{editUrl}}}\'; return false;" title="Edit" class="btnhide social-tooltip" type="button">'+
                    '<i class="fa fa-edit"></i><span class="hide">Edit</span>'+
                '</button>'+
                '<button data-position="{{position}}" data-social="0" data-id="{{articleId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">'+
                    '<i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>'+
                '</button>'+
            '</div>'+
        "{{/if}}"+
    '</a>'+
'</div>';
                                                
var socialCardTemplate =  '<div class="{{containerClass}}">' +
                                '<a href="{{social.url}}"\
                                    target="_blank"\
                                    class="card swap social {{social.source}} {{#if social.hasMedia}} withImage__content {{else }} without__image {{/if}} {{videoClass}}"\
                                    data-id="{{socialId}}"\
                                    data-position="{{position}}"\
                                    data-social="1"\
                                    data-article-image="{{{social.media.path}}}"\
                                    data-article-text="{{social.content}}">\
                                    {{#if social.hasMedia}}\
                                    <article class="">\
                                    \
                                        <figure class="{{videoClass}}">\
                                            <img class="img-responsive" src="{{social.media.path}}" style="background-image:url(https://placeholdit.imgix.net/~text?txtsize=33&txt=Loading&w=450&h=250)">\
                                        </figure>\
                                        {{/if}}\
                                        \
                                        <div class="content">\
                                            <div class="category {{social.source}}">{{social.source}}</div>\
                                            <p id="updateSocial{{article.socialId}}" data-update="0">{{{social.content}}}</p>\
                                            <time datetime="2016-11-16"></time>\
                                            <div class="author">\
                                                <p class="">{{ social.user.name }}</p>\
                                            </div>\
                                        </div>'+


                                        '{{#if userHasBlogAccess}}\
                                            <div class="btn_overlay articleMenu">\
                                                <button title="Hide" data-guid="{{social.guid}}" class="btnhide social-tooltip HideBlogArticle" type="button" data-social="1">\
                                                    <i class="fa fa-eye-slash"></i><span class="hide">Hide</span>\
                                                </button>\
                                                <button title="Edit" class="btnhide social-tooltip editSocialPost" type="button" data-url="/admin/social-funnel/update-social?guid={{blog.guid}}&socialguid={{social.guid}}">\
                                                <i class="fa fa-edit"></i><span class="hide">Edit</span>\
                                                </button>\
                                                <button data-position="{{position}}" data-social="1" data-id="{{socialId}}" title="{{pinTitle}}" class="btnhide social-tooltip PinArticleBtn" type="button" data-status="{{isPinned}}">\
                                                    <i class="fa fa-thumb-tack"></i><span class="hide">{{pinText}}</span>\
                                                </button>\
                                            </div>\
                                        {{/if}}\
                                    </article>\
                                </a>\
                            </div>';