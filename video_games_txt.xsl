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
        <xsl:value-of select="concat('Tytuł: ',*[name()='title'])"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="concat('Cena:',*[name()='price'])"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="concat('Gatunek:',*[name()='genre'])"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="concat('Data Wydania:',*[name()='releaseDate'])"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>Platformy:</xsl:text>
        <xsl:apply-templates select="*[name()='platform']/*[name()='item']"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:value-of select="concat('Ocena według ',*[name()='rating'] / *[name() = 'source'],':',*[name()='rating'] / *[name() = 'percentageRating'])"/>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
        <xsl:text>&#xa;</xsl:text>
    </xsl:template>

    <xsl:template match="*[name()='platform']/*[name()='item']">
        <xsl:value-of select="concat(*[name()],',')"/>"
    </xsl:template>
</xsl:stylesheet>