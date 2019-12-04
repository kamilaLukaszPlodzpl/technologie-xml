<xsl:stylesheet version="2.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Format">
<xsl:output method="text" encoding="utf-8"/>

    <xsl:template match="/">
        <xsl:value-of select="//*[name()='description']"/>
        <xsl:apply-templates select="//*[name()='gameList']/*[name()='game']"/>
    </xsl:template>

    <xsl:template match="//*[name()='gameList']/*[name()='game']">
        <xsl:value-of select="concat('Tytuł:',*[name()='title'])"/>
        <!--<xsl:value-of select="concat('Cena:',*[name()='price'])"/>
        <xsl:value-of select="concat('Gatunek:',*[name()='genre'])"/>
        <xsl:value-of select="concat('Data Wydania:',*[name()='releaseDate'])"/>
        <xsl:value-of select="concat('Platformy:',*[name()='platforms']/*[name()='item'])"/>-->
    </xsl:template>

</xsl:stylesheet>