<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns="http://www.w3.org/2000/svg"
>

    <xsl:output method="xml" version="1.0" encoding="UTF-8" indent="yes"/>

    <xsl:variable name="viewportX" select="200"/>
    <xsl:variable name="viewportY" select="200"/>
    <xsl:variable name="background" select="'#5287cc'"/>
    <xsl:variable name="background-header" select="'#ffcfbf'"/>
    
    <xsl:template match="/">
        <xsl:element name="svg" namespace="http://www.w3.org/2000/svg">
            <xsl:namespace name="xlink" select="'http://www.w3.org/1999/xlink'"/>
            <xsl:attribute name="viewBox"><xsl:value-of select="concat('0 0 ',string($viewportX),' ',string($viewportY))"/></xsl:attribute>
            <rect x="0" y="0" width="100%" height="100%" fill="{$background}"/>
            <xsl:call-template name="style"/>
            <xsl:call-template name="header"/>
            <xsl:call-template name="content"/>
            <xsl:call-template name="scripts"/>
        </xsl:element>
    </xsl:template>

    <xsl:template name="style">
        <style type="text/css">
            <![CDATA[
            @import url('https://fonts.googleapis.com/css?family=Roboto&display=swap');
            @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
            ]]></style>
    </xsl:template>
    <xsl:template name="scripts">
        <xsl:element name="script">
            <xsl:attribute name="type">text/javascript</xsl:attribute>
            <xsl:attribute name="href">svg.js</xsl:attribute>
        </xsl:element>
    </xsl:template>

    <xsl:template name="header">
        <rect width="99%" height="30%" x="0.5%" y="1" fill="{$background-header}"/>
        <line x1="0.5%" x2="99.5%" y1="60" y2="60" stroke="#5184AF" stroke-width="2" stroke-linecap="square" stroke-dasharray="1, 5"/>
        <line x1="0.5%" x2="99.5%" y1="2" y2="2" stroke="#5184AF" stroke-width="2" stroke-linecap="square" stroke-dasharray="1, 5"/>
        <text x="36%" y="1em">
            <xsl:attribute name="style">font-family: 'Caveat', cursive;</xsl:attribute>
            <xsl:value-of select="//raport/description"/>
        </text>
        <rect id="BtnNext" width="10%" height="30" x="4%" y="1.5em" fill="{$background}" rx="4" ry="4"/>
        <rect id="BtnPrev" width="10%" height="30" x="86%" y="1.5em" fill="{$background}" rx="4" ry="4"/>
        <rect width="70%" height="30" x="15%" y="1.5em" fill="{$background}" rx="4" ry="4"/>
    </xsl:template>

    <xsl:template name="content">
        <clipPath id="clipPages">
            <rect width="100%" height="69%" x="0" y="31%"/>
        </clipPath>
        <g clip-path="url(#clipPages)">
            <g class="page">
                <rect width="100%" height="100%" x="0" y="31%" fill="black"/>
                <xsl:call-template name="animationsPage"/>
            </g>
            <rect class="page" width="100%" height="100%" x="0" y="31%" fill="green">
                <xsl:call-template name="animationsPage"/>
            </rect>
        </g>
    </xsl:template>

    <xsl:template name="animationsPage">
        <animateTransform begin="indefinite" id="hideAnimationNext" attributeName="transform" attributeType="XML" from="0,0" to="-{$viewportX},0" dur="2s"/>
        <animateTransform begin="indefinite" id="showAnimationNext" attributeName="transform" attributeType="XML" from="{$viewportX},0" to="0,0" dur="2s"/>
        <animateTransform begin="indefinite" id="hideAnimationPrev" attributeName="transform" attributeType="XML" from="0,0" to="{$viewportX},0" dur="2s"/>
        <animateTransform begin="indefinite" id="showAnimationPrev" attributeName="transform" attributeType="XML" from="-{$viewportX},0" to="0,0" dur="2s"/>
    </xsl:template>
</xsl:stylesheet>