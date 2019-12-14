<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:output method="text" encoding="utf-8"/>

    <xsl:template match="/">
        <xsl:value-of select="//*[name()='description']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
        <xsl:apply-templates select="//*[name()='gameList']/*[name()='game']"/>
    </xsl:template>

    <xsl:template match="//*[name()='gameList']/*[name()='game']">
        Tytuł:<xsl:value-of select="*[name()='title']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="*[name()='price']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="*[name()='genre']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="*[name()='releaseDate']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="*[name()='platforms']/*[name()='item']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="*[name()='rating'] / *[name() = 'source'],':',*[name()='rating'] / *[name() = 'percentageRating']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
    </xsl:template>

    <xsl:template name="space">
        <xsl:param name="length"/>
        <xsl:value-of select="' '"/>
        <xsl:call-template name="space">
            <xsl:with-param name="length" select="$length - 1"/>
        </xsl:call-template>
    </xsl:template>
</xsl:stylesheet>