<xsl:stylesheet version="2.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

    <xsl:template match="/">
        <xsl:apply-templates select="*[name() = 'html']/*[name() = 'body']"/>
    </xsl:template>

    <xsl:template match="*[name() = 'html']/*[name() = 'body']">
        <xsl:value-of select="."/>
    </xsl:template>

</xsl:stylesheet>